import React from 'react';
const LABEL_15408 = 'component_15408';
export function Component15408({ value = 15408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15408, 'data-value': derived.doubled }, children);
}
export default Component15408;
