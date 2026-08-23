import React from 'react';
const LABEL_24480 = 'component_24480';
export function Component24480({ value = 24480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24480, 'data-value': derived.doubled }, children);
}
export default Component24480;
