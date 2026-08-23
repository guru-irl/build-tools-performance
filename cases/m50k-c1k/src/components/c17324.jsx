import React from 'react';
const LABEL_17324 = 'component_17324';
export function Component17324({ value = 17324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17324, 'data-value': derived.doubled }, children);
}
export default Component17324;
