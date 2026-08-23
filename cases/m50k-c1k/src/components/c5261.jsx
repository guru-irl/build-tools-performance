import React from 'react';
const LABEL_5261 = 'component_5261';
export function Component5261({ value = 5261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5261, 'data-value': derived.doubled }, children);
}
export default Component5261;
