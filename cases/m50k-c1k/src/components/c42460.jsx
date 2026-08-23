import React from 'react';
const LABEL_42460 = 'component_42460';
export function Component42460({ value = 42460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42460, 'data-value': derived.doubled }, children);
}
export default Component42460;
