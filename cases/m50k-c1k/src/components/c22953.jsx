import React from 'react';
const LABEL_22953 = 'component_22953';
export function Component22953({ value = 22953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22953, 'data-value': derived.doubled }, children);
}
export default Component22953;
