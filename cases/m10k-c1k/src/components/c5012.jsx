import React from 'react';
const LABEL_5012 = 'component_5012';
export function Component5012({ value = 5012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5012, 'data-value': derived.doubled }, children);
}
export default Component5012;
