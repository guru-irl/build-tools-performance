import React from 'react';
const LABEL_8273 = 'component_8273';
export function Component8273({ value = 8273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8273, 'data-value': derived.doubled }, children);
}
export default Component8273;
