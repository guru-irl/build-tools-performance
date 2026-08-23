import React from 'react';
const LABEL_42345 = 'component_42345';
export function Component42345({ value = 42345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42345, 'data-value': derived.doubled }, children);
}
export default Component42345;
