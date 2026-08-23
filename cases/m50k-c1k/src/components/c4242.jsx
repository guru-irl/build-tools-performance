import React from 'react';
const LABEL_4242 = 'component_4242';
export function Component4242({ value = 4242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4242, 'data-value': derived.doubled }, children);
}
export default Component4242;
