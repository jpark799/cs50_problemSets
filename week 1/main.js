const mario = rows => {
    let row = []
    if (rows < 0 || rows > 23 ) {
      return ('Error, rows must be larger than 0 & less than 23.')
    }
  
    for (i = 0; i < rows; i ++) {
      row.push(' ')
    }
  
    for (j = 0; j < rows; j ++) {
      row.shift()
      row.push('@')
      console.log(row)
      }
  
  
  }
  