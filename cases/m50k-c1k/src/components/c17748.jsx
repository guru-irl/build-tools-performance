import React from 'react';
const LABEL_17748 = 'component_17748';
export function Component17748({ value = 17748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17748, 'data-value': derived.doubled }, children);
}
export default Component17748;
