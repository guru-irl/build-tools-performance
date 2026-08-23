import React from 'react';
const LABEL_45586 = 'component_45586';
export function Component45586({ value = 45586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45586, 'data-value': derived.doubled }, children);
}
export default Component45586;
