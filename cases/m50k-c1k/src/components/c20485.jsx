import React from 'react';
const LABEL_20485 = 'component_20485';
export function Component20485({ value = 20485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20485, 'data-value': derived.doubled }, children);
}
export default Component20485;
