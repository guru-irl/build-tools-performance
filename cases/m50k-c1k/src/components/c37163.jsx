import React from 'react';
const LABEL_37163 = 'component_37163';
export function Component37163({ value = 37163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37163, 'data-value': derived.doubled }, children);
}
export default Component37163;
