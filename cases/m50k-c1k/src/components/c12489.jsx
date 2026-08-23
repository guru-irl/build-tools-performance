import React from 'react';
const LABEL_12489 = 'component_12489';
export function Component12489({ value = 12489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12489, 'data-value': derived.doubled }, children);
}
export default Component12489;
