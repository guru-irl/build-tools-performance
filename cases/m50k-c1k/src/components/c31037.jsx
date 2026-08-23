import React from 'react';
const LABEL_31037 = 'component_31037';
export function Component31037({ value = 31037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31037, 'data-value': derived.doubled }, children);
}
export default Component31037;
