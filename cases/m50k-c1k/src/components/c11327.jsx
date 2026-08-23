import React from 'react';
const LABEL_11327 = 'component_11327';
export function Component11327({ value = 11327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11327, 'data-value': derived.doubled }, children);
}
export default Component11327;
