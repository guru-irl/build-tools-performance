import React from 'react';
const LABEL_8357 = 'component_8357';
export function Component8357({ value = 8357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8357, 'data-value': derived.doubled }, children);
}
export default Component8357;
