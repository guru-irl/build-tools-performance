import React from 'react';
const LABEL_21984 = 'component_21984';
export function Component21984({ value = 21984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21984, 'data-value': derived.doubled }, children);
}
export default Component21984;
