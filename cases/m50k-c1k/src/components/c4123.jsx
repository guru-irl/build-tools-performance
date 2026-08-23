import React from 'react';
const LABEL_4123 = 'component_4123';
export function Component4123({ value = 4123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4123, 'data-value': derived.doubled }, children);
}
export default Component4123;
