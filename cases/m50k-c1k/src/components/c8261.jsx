import React from 'react';
const LABEL_8261 = 'component_8261';
export function Component8261({ value = 8261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8261, 'data-value': derived.doubled }, children);
}
export default Component8261;
