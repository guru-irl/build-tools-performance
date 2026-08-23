import React from 'react';
const LABEL_803 = 'component_803';
export function Component803({ value = 803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_803, 'data-value': derived.doubled }, children);
}
export default Component803;
