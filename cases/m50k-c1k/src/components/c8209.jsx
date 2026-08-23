import React from 'react';
const LABEL_8209 = 'component_8209';
export function Component8209({ value = 8209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8209, 'data-value': derived.doubled }, children);
}
export default Component8209;
