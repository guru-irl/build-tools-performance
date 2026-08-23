import React from 'react';
const LABEL_920 = 'component_920';
export function Component920({ value = 920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_920, 'data-value': derived.doubled }, children);
}
export default Component920;
