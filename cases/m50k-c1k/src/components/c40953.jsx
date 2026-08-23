import React from 'react';
const LABEL_40953 = 'component_40953';
export function Component40953({ value = 40953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40953, 'data-value': derived.doubled }, children);
}
export default Component40953;
