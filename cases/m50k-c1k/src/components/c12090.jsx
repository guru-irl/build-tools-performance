import React from 'react';
const LABEL_12090 = 'component_12090';
export function Component12090({ value = 12090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12090, 'data-value': derived.doubled }, children);
}
export default Component12090;
