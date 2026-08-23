import React from 'react';
const LABEL_38946 = 'component_38946';
export function Component38946({ value = 38946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38946, 'data-value': derived.doubled }, children);
}
export default Component38946;
