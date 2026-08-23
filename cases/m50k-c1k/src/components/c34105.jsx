import React from 'react';
const LABEL_34105 = 'component_34105';
export function Component34105({ value = 34105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34105, 'data-value': derived.doubled }, children);
}
export default Component34105;
