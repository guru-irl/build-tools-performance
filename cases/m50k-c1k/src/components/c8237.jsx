import React from 'react';
const LABEL_8237 = 'component_8237';
export function Component8237({ value = 8237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8237, 'data-value': derived.doubled }, children);
}
export default Component8237;
