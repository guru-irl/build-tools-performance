import React from 'react';
const LABEL_45438 = 'component_45438';
export function Component45438({ value = 45438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45438, 'data-value': derived.doubled }, children);
}
export default Component45438;
