import React from 'react';
const LABEL_42506 = 'component_42506';
export function Component42506({ value = 42506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42506, 'data-value': derived.doubled }, children);
}
export default Component42506;
