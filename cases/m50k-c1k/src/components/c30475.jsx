import React from 'react';
const LABEL_30475 = 'component_30475';
export function Component30475({ value = 30475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30475, 'data-value': derived.doubled }, children);
}
export default Component30475;
