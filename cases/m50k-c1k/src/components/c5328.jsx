import React from 'react';
const LABEL_5328 = 'component_5328';
export function Component5328({ value = 5328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5328, 'data-value': derived.doubled }, children);
}
export default Component5328;
