import React from 'react';
const LABEL_40080 = 'component_40080';
export function Component40080({ value = 40080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40080, 'data-value': derived.doubled }, children);
}
export default Component40080;
