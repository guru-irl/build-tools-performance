import React from 'react';
const LABEL_15313 = 'component_15313';
export function Component15313({ value = 15313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15313, 'data-value': derived.doubled }, children);
}
export default Component15313;
