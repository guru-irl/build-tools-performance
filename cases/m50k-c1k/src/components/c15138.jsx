import React from 'react';
const LABEL_15138 = 'component_15138';
export function Component15138({ value = 15138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15138, 'data-value': derived.doubled }, children);
}
export default Component15138;
