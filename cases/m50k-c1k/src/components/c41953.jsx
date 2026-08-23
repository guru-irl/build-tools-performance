import React from 'react';
const LABEL_41953 = 'component_41953';
export function Component41953({ value = 41953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41953, 'data-value': derived.doubled }, children);
}
export default Component41953;
