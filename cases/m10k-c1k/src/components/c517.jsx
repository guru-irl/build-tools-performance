import React from 'react';
const LABEL_517 = 'component_517';
export function Component517({ value = 517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_517, 'data-value': derived.doubled }, children);
}
export default Component517;
