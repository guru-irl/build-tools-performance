import React from 'react';
const LABEL_11244 = 'component_11244';
export function Component11244({ value = 11244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11244, 'data-value': derived.doubled }, children);
}
export default Component11244;
