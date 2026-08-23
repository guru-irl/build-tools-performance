import React from 'react';
const LABEL_23728 = 'component_23728';
export function Component23728({ value = 23728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23728, 'data-value': derived.doubled }, children);
}
export default Component23728;
