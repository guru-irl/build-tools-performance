import React from 'react';
const LABEL_42942 = 'component_42942';
export function Component42942({ value = 42942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42942, 'data-value': derived.doubled }, children);
}
export default Component42942;
