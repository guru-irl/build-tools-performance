import React from 'react';
const LABEL_24643 = 'component_24643';
export function Component24643({ value = 24643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24643, 'data-value': derived.doubled }, children);
}
export default Component24643;
