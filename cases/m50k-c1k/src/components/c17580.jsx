import React from 'react';
const LABEL_17580 = 'component_17580';
export function Component17580({ value = 17580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17580, 'data-value': derived.doubled }, children);
}
export default Component17580;
