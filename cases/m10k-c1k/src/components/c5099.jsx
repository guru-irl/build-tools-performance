import React from 'react';
const LABEL_5099 = 'component_5099';
export function Component5099({ value = 5099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5099, 'data-value': derived.doubled }, children);
}
export default Component5099;
