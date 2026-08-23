import React from 'react';
const LABEL_8913 = 'component_8913';
export function Component8913({ value = 8913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8913, 'data-value': derived.doubled }, children);
}
export default Component8913;
