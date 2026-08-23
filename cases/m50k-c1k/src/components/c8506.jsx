import React from 'react';
const LABEL_8506 = 'component_8506';
export function Component8506({ value = 8506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8506, 'data-value': derived.doubled }, children);
}
export default Component8506;
