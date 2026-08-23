import React from 'react';
const LABEL_27931 = 'component_27931';
export function Component27931({ value = 27931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27931, 'data-value': derived.doubled }, children);
}
export default Component27931;
