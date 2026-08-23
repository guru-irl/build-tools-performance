import React from 'react';
const LABEL_34261 = 'component_34261';
export function Component34261({ value = 34261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34261, 'data-value': derived.doubled }, children);
}
export default Component34261;
