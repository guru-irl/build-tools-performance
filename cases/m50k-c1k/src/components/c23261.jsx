import React from 'react';
const LABEL_23261 = 'component_23261';
export function Component23261({ value = 23261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23261, 'data-value': derived.doubled }, children);
}
export default Component23261;
