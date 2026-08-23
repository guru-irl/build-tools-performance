import React from 'react';
const LABEL_45140 = 'component_45140';
export function Component45140({ value = 45140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45140, 'data-value': derived.doubled }, children);
}
export default Component45140;
