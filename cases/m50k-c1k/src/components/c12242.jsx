import React from 'react';
const LABEL_12242 = 'component_12242';
export function Component12242({ value = 12242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12242, 'data-value': derived.doubled }, children);
}
export default Component12242;
