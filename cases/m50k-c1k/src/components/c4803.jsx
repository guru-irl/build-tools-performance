import React from 'react';
const LABEL_4803 = 'component_4803';
export function Component4803({ value = 4803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4803, 'data-value': derived.doubled }, children);
}
export default Component4803;
