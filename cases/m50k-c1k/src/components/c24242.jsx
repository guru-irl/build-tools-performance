import React from 'react';
const LABEL_24242 = 'component_24242';
export function Component24242({ value = 24242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24242, 'data-value': derived.doubled }, children);
}
export default Component24242;
