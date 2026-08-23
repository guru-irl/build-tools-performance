import React from 'react';
const LABEL_30327 = 'component_30327';
export function Component30327({ value = 30327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30327, 'data-value': derived.doubled }, children);
}
export default Component30327;
