import React from 'react';
const LABEL_2926 = 'component_2926';
export function Component2926({ value = 2926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2926, 'data-value': derived.doubled }, children);
}
export default Component2926;
