import React from 'react';
const LABEL_2400 = 'component_2400';
export function Component2400({ value = 2400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2400, 'data-value': derived.doubled }, children);
}
export default Component2400;
