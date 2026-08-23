import React from 'react';
const LABEL_17422 = 'component_17422';
export function Component17422({ value = 17422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17422, 'data-value': derived.doubled }, children);
}
export default Component17422;
