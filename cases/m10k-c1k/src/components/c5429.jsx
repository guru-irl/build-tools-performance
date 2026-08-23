import React from 'react';
const LABEL_5429 = 'component_5429';
export function Component5429({ value = 5429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5429, 'data-value': derived.doubled }, children);
}
export default Component5429;
