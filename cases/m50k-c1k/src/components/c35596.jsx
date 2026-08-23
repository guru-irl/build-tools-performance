import React from 'react';
const LABEL_35596 = 'component_35596';
export function Component35596({ value = 35596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35596, 'data-value': derived.doubled }, children);
}
export default Component35596;
