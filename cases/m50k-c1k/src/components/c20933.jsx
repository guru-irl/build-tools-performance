import React from 'react';
const LABEL_20933 = 'component_20933';
export function Component20933({ value = 20933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20933, 'data-value': derived.doubled }, children);
}
export default Component20933;
