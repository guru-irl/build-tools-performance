import React from 'react';
const LABEL_23015 = 'component_23015';
export function Component23015({ value = 23015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23015, 'data-value': derived.doubled }, children);
}
export default Component23015;
