import React from 'react';
const LABEL_37454 = 'component_37454';
export function Component37454({ value = 37454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37454, 'data-value': derived.doubled }, children);
}
export default Component37454;
