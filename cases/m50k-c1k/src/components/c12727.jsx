import React from 'react';
const LABEL_12727 = 'component_12727';
export function Component12727({ value = 12727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12727, 'data-value': derived.doubled }, children);
}
export default Component12727;
