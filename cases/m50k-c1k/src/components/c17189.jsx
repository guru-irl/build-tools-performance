import React from 'react';
const LABEL_17189 = 'component_17189';
export function Component17189({ value = 17189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17189, 'data-value': derived.doubled }, children);
}
export default Component17189;
