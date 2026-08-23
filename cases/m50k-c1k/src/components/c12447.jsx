import React from 'react';
const LABEL_12447 = 'component_12447';
export function Component12447({ value = 12447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12447, 'data-value': derived.doubled }, children);
}
export default Component12447;
