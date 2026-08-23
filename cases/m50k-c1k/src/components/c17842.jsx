import React from 'react';
const LABEL_17842 = 'component_17842';
export function Component17842({ value = 17842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17842, 'data-value': derived.doubled }, children);
}
export default Component17842;
