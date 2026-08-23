import React from 'react';
const LABEL_12142 = 'component_12142';
export function Component12142({ value = 12142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12142, 'data-value': derived.doubled }, children);
}
export default Component12142;
