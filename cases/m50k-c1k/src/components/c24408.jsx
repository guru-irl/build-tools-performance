import React from 'react';
const LABEL_24408 = 'component_24408';
export function Component24408({ value = 24408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24408, 'data-value': derived.doubled }, children);
}
export default Component24408;
