import React from 'react';
const LABEL_24306 = 'component_24306';
export function Component24306({ value = 24306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24306, 'data-value': derived.doubled }, children);
}
export default Component24306;
