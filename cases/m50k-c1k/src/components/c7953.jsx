import React from 'react';
const LABEL_7953 = 'component_7953';
export function Component7953({ value = 7953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7953, 'data-value': derived.doubled }, children);
}
export default Component7953;
