import React from 'react';
const LABEL_12406 = 'component_12406';
export function Component12406({ value = 12406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12406, 'data-value': derived.doubled }, children);
}
export default Component12406;
