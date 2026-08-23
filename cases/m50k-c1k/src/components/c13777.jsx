import React from 'react';
const LABEL_13777 = 'component_13777';
export function Component13777({ value = 13777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13777, 'data-value': derived.doubled }, children);
}
export default Component13777;
