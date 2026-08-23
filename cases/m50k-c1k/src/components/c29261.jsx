import React from 'react';
const LABEL_29261 = 'component_29261';
export function Component29261({ value = 29261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29261, 'data-value': derived.doubled }, children);
}
export default Component29261;
