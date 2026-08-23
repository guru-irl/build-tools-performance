import React from 'react';
const LABEL_42559 = 'component_42559';
export function Component42559({ value = 42559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42559, 'data-value': derived.doubled }, children);
}
export default Component42559;
