import React from 'react';
const LABEL_42840 = 'component_42840';
export function Component42840({ value = 42840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42840, 'data-value': derived.doubled }, children);
}
export default Component42840;
