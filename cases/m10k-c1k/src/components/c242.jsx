import React from 'react';
const LABEL_242 = 'component_242';
export function Component242({ value = 242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_242, 'data-value': derived.doubled }, children);
}
export default Component242;
