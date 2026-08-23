import React from 'react';
const LABEL_13189 = 'component_13189';
export function Component13189({ value = 13189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13189, 'data-value': derived.doubled }, children);
}
export default Component13189;
