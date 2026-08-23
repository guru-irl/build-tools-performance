import React from 'react';
const LABEL_21586 = 'component_21586';
export function Component21586({ value = 21586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21586, 'data-value': derived.doubled }, children);
}
export default Component21586;
