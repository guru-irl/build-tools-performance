import React from 'react';
const LABEL_12868 = 'component_12868';
export function Component12868({ value = 12868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12868, 'data-value': derived.doubled }, children);
}
export default Component12868;
