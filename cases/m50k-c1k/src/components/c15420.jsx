import React from 'react';
const LABEL_15420 = 'component_15420';
export function Component15420({ value = 15420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15420, 'data-value': derived.doubled }, children);
}
export default Component15420;
