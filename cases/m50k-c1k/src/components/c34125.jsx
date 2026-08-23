import React from 'react';
const LABEL_34125 = 'component_34125';
export function Component34125({ value = 34125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34125, 'data-value': derived.doubled }, children);
}
export default Component34125;
