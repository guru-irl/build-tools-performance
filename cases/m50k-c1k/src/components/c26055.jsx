import React from 'react';
const LABEL_26055 = 'component_26055';
export function Component26055({ value = 26055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26055, 'data-value': derived.doubled }, children);
}
export default Component26055;
