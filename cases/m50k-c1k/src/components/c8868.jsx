import React from 'react';
const LABEL_8868 = 'component_8868';
export function Component8868({ value = 8868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8868, 'data-value': derived.doubled }, children);
}
export default Component8868;
