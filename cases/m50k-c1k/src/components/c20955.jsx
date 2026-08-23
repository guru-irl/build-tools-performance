import React from 'react';
const LABEL_20955 = 'component_20955';
export function Component20955({ value = 20955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20955, 'data-value': derived.doubled }, children);
}
export default Component20955;
