import React from 'react';
const LABEL_15478 = 'component_15478';
export function Component15478({ value = 15478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15478, 'data-value': derived.doubled }, children);
}
export default Component15478;
