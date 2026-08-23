import React from 'react';
const LABEL_17617 = 'component_17617';
export function Component17617({ value = 17617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17617, 'data-value': derived.doubled }, children);
}
export default Component17617;
