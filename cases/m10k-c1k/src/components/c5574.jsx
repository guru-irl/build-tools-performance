import React from 'react';
const LABEL_5574 = 'component_5574';
export function Component5574({ value = 5574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5574, 'data-value': derived.doubled }, children);
}
export default Component5574;
