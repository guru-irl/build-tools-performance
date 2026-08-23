import React from 'react';
const LABEL_45351 = 'component_45351';
export function Component45351({ value = 45351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45351, 'data-value': derived.doubled }, children);
}
export default Component45351;
