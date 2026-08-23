import React from 'react';
const LABEL_19644 = 'component_19644';
export function Component19644({ value = 19644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19644, 'data-value': derived.doubled }, children);
}
export default Component19644;
