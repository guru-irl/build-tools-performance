import React from 'react';
const LABEL_6586 = 'component_6586';
export function Component6586({ value = 6586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6586, 'data-value': derived.doubled }, children);
}
export default Component6586;
