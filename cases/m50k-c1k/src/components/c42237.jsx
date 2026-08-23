import React from 'react';
const LABEL_42237 = 'component_42237';
export function Component42237({ value = 42237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42237, 'data-value': derived.doubled }, children);
}
export default Component42237;
