import React from 'react';
const LABEL_30301 = 'component_30301';
export function Component30301({ value = 30301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30301, 'data-value': derived.doubled }, children);
}
export default Component30301;
