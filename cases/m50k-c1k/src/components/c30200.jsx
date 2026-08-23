import React from 'react';
const LABEL_30200 = 'component_30200';
export function Component30200({ value = 30200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30200, 'data-value': derived.doubled }, children);
}
export default Component30200;
