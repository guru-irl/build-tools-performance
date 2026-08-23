import React from 'react';
const LABEL_40237 = 'component_40237';
export function Component40237({ value = 40237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40237, 'data-value': derived.doubled }, children);
}
export default Component40237;
