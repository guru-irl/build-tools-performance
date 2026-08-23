import React from 'react';
const LABEL_42312 = 'component_42312';
export function Component42312({ value = 42312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42312, 'data-value': derived.doubled }, children);
}
export default Component42312;
