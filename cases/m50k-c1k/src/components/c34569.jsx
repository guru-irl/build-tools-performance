import React from 'react';
const LABEL_34569 = 'component_34569';
export function Component34569({ value = 34569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34569, 'data-value': derived.doubled }, children);
}
export default Component34569;
