import React from 'react';
const LABEL_8912 = 'component_8912';
export function Component8912({ value = 8912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8912, 'data-value': derived.doubled }, children);
}
export default Component8912;
