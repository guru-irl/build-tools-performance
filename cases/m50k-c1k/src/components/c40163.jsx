import React from 'react';
const LABEL_40163 = 'component_40163';
export function Component40163({ value = 40163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40163, 'data-value': derived.doubled }, children);
}
export default Component40163;
