import React from 'react';
const LABEL_38586 = 'component_38586';
export function Component38586({ value = 38586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38586, 'data-value': derived.doubled }, children);
}
export default Component38586;
