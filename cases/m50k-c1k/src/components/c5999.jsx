import React from 'react';
const LABEL_5999 = 'component_5999';
export function Component5999({ value = 5999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5999, 'data-value': derived.doubled }, children);
}
export default Component5999;
