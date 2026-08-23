import React from 'react';
const LABEL_12413 = 'component_12413';
export function Component12413({ value = 12413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12413, 'data-value': derived.doubled }, children);
}
export default Component12413;
