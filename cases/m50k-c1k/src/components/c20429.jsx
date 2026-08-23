import React from 'react';
const LABEL_20429 = 'component_20429';
export function Component20429({ value = 20429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20429, 'data-value': derived.doubled }, children);
}
export default Component20429;
