import React from 'react';
const LABEL_30339 = 'component_30339';
export function Component30339({ value = 30339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30339, 'data-value': derived.doubled }, children);
}
export default Component30339;
