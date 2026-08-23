import React from 'react';
const LABEL_40055 = 'component_40055';
export function Component40055({ value = 40055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40055, 'data-value': derived.doubled }, children);
}
export default Component40055;
