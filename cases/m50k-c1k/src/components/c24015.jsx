import React from 'react';
const LABEL_24015 = 'component_24015';
export function Component24015({ value = 24015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24015, 'data-value': derived.doubled }, children);
}
export default Component24015;
