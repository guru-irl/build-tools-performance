import React from 'react';
const LABEL_30408 = 'component_30408';
export function Component30408({ value = 30408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30408, 'data-value': derived.doubled }, children);
}
export default Component30408;
