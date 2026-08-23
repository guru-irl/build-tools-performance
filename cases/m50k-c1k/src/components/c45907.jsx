import React from 'react';
const LABEL_45907 = 'component_45907';
export function Component45907({ value = 45907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45907, 'data-value': derived.doubled }, children);
}
export default Component45907;
