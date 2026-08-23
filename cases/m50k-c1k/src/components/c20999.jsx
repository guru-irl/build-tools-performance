import React from 'react';
const LABEL_20999 = 'component_20999';
export function Component20999({ value = 20999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20999, 'data-value': derived.doubled }, children);
}
export default Component20999;
