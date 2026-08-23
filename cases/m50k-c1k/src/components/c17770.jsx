import React from 'react';
const LABEL_17770 = 'component_17770';
export function Component17770({ value = 17770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17770, 'data-value': derived.doubled }, children);
}
export default Component17770;
