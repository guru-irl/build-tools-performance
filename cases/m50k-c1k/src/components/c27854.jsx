import React from 'react';
const LABEL_27854 = 'component_27854';
export function Component27854({ value = 27854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27854, 'data-value': derived.doubled }, children);
}
export default Component27854;
