import React from 'react';
const LABEL_35261 = 'component_35261';
export function Component35261({ value = 35261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35261, 'data-value': derived.doubled }, children);
}
export default Component35261;
