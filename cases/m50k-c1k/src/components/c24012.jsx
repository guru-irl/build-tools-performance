import React from 'react';
const LABEL_24012 = 'component_24012';
export function Component24012({ value = 24012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24012, 'data-value': derived.doubled }, children);
}
export default Component24012;
