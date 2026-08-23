import React from 'react';
const LABEL_8132 = 'component_8132';
export function Component8132({ value = 8132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8132, 'data-value': derived.doubled }, children);
}
export default Component8132;
