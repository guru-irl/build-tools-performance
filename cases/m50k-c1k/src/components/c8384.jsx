import React from 'react';
const LABEL_8384 = 'component_8384';
export function Component8384({ value = 8384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8384, 'data-value': derived.doubled }, children);
}
export default Component8384;
