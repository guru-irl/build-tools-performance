import React from 'react';
const LABEL_8558 = 'component_8558';
export function Component8558({ value = 8558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8558, 'data-value': derived.doubled }, children);
}
export default Component8558;
