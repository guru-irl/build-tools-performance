import React from 'react';
const LABEL_20208 = 'component_20208';
export function Component20208({ value = 20208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20208, 'data-value': derived.doubled }, children);
}
export default Component20208;
