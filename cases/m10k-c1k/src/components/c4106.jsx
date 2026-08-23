import React from 'react';
const LABEL_4106 = 'component_4106';
export function Component4106({ value = 4106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4106, 'data-value': derived.doubled }, children);
}
export default Component4106;
