import React from 'react';
const LABEL_8068 = 'component_8068';
export function Component8068({ value = 8068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8068, 'data-value': derived.doubled }, children);
}
export default Component8068;
