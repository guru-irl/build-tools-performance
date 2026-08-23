import React from 'react';
const LABEL_10908 = 'component_10908';
export function Component10908({ value = 10908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10908, 'data-value': derived.doubled }, children);
}
export default Component10908;
