import React from 'react';
const LABEL_953 = 'component_953';
export function Component953({ value = 953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_953, 'data-value': derived.doubled }, children);
}
export default Component953;
