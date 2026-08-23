import React from 'react';
const LABEL_16408 = 'component_16408';
export function Component16408({ value = 16408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16408, 'data-value': derived.doubled }, children);
}
export default Component16408;
