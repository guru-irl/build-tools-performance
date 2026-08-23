import React from 'react';
const LABEL_15630 = 'component_15630';
export function Component15630({ value = 15630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15630, 'data-value': derived.doubled }, children);
}
export default Component15630;
