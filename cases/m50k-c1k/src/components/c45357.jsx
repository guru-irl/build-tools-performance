import React from 'react';
const LABEL_45357 = 'component_45357';
export function Component45357({ value = 45357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45357, 'data-value': derived.doubled }, children);
}
export default Component45357;
