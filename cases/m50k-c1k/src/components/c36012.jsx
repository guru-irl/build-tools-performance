import React from 'react';
const LABEL_36012 = 'component_36012';
export function Component36012({ value = 36012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36012, 'data-value': derived.doubled }, children);
}
export default Component36012;
