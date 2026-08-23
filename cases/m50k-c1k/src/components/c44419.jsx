import React from 'react';
const LABEL_44419 = 'component_44419';
export function Component44419({ value = 44419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44419, 'data-value': derived.doubled }, children);
}
export default Component44419;
