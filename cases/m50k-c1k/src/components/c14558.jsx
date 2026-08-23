import React from 'react';
const LABEL_14558 = 'component_14558';
export function Component14558({ value = 14558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14558, 'data-value': derived.doubled }, children);
}
export default Component14558;
