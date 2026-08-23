import React from 'react';
const LABEL_5933 = 'component_5933';
export function Component5933({ value = 5933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5933, 'data-value': derived.doubled }, children);
}
export default Component5933;
