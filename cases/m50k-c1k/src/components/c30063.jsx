import React from 'react';
const LABEL_30063 = 'component_30063';
export function Component30063({ value = 30063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30063, 'data-value': derived.doubled }, children);
}
export default Component30063;
