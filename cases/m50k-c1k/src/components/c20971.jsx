import React from 'react';
const LABEL_20971 = 'component_20971';
export function Component20971({ value = 20971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20971, 'data-value': derived.doubled }, children);
}
export default Component20971;
