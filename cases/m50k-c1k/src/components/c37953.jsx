import React from 'react';
const LABEL_37953 = 'component_37953';
export function Component37953({ value = 37953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37953, 'data-value': derived.doubled }, children);
}
export default Component37953;
