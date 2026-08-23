import React from 'react';
const LABEL_4163 = 'component_4163';
export function Component4163({ value = 4163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4163, 'data-value': derived.doubled }, children);
}
export default Component4163;
