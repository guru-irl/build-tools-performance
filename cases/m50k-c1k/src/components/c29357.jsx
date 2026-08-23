import React from 'react';
const LABEL_29357 = 'component_29357';
export function Component29357({ value = 29357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29357, 'data-value': derived.doubled }, children);
}
export default Component29357;
