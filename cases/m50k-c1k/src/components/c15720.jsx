import React from 'react';
const LABEL_15720 = 'component_15720';
export function Component15720({ value = 15720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15720, 'data-value': derived.doubled }, children);
}
export default Component15720;
