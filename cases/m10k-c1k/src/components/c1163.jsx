import React from 'react';
const LABEL_1163 = 'component_1163';
export function Component1163({ value = 1163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1163, 'data-value': derived.doubled }, children);
}
export default Component1163;
