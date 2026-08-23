import React from 'react';
const LABEL_38395 = 'component_38395';
export function Component38395({ value = 38395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38395, 'data-value': derived.doubled }, children);
}
export default Component38395;
