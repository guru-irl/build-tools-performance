import React from 'react';
const LABEL_5860 = 'component_5860';
export function Component5860({ value = 5860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5860, 'data-value': derived.doubled }, children);
}
export default Component5860;
