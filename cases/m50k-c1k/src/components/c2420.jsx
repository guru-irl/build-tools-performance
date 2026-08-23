import React from 'react';
const LABEL_2420 = 'component_2420';
export function Component2420({ value = 2420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2420, 'data-value': derived.doubled }, children);
}
export default Component2420;
