import React from 'react';
const LABEL_15934 = 'component_15934';
export function Component15934({ value = 15934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15934, 'data-value': derived.doubled }, children);
}
export default Component15934;
