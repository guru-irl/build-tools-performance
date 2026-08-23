import React from 'react';
const LABEL_12444 = 'component_12444';
export function Component12444({ value = 12444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12444, 'data-value': derived.doubled }, children);
}
export default Component12444;
