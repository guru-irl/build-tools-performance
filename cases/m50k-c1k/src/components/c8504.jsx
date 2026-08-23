import React from 'react';
const LABEL_8504 = 'component_8504';
export function Component8504({ value = 8504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8504, 'data-value': derived.doubled }, children);
}
export default Component8504;
