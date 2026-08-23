import React from 'react';
const LABEL_17681 = 'component_17681';
export function Component17681({ value = 17681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17681, 'data-value': derived.doubled }, children);
}
export default Component17681;
