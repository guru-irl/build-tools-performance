import React from 'react';
const LABEL_12232 = 'component_12232';
export function Component12232({ value = 12232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12232, 'data-value': derived.doubled }, children);
}
export default Component12232;
