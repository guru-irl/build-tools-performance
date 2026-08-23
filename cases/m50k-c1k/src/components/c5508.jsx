import React from 'react';
const LABEL_5508 = 'component_5508';
export function Component5508({ value = 5508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5508, 'data-value': derived.doubled }, children);
}
export default Component5508;
