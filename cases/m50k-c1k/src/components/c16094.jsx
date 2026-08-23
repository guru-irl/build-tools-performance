import React from 'react';
const LABEL_16094 = 'component_16094';
export function Component16094({ value = 16094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16094, 'data-value': derived.doubled }, children);
}
export default Component16094;
