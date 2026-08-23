import React from 'react';
const LABEL_5953 = 'component_5953';
export function Component5953({ value = 5953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5953, 'data-value': derived.doubled }, children);
}
export default Component5953;
