import React from 'react';
const LABEL_27903 = 'component_27903';
export function Component27903({ value = 27903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27903, 'data-value': derived.doubled }, children);
}
export default Component27903;
