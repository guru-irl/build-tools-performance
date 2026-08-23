import React from 'react';
const LABEL_14408 = 'component_14408';
export function Component14408({ value = 14408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14408, 'data-value': derived.doubled }, children);
}
export default Component14408;
