import React from 'react';
const LABEL_30546 = 'component_30546';
export function Component30546({ value = 30546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30546, 'data-value': derived.doubled }, children);
}
export default Component30546;
