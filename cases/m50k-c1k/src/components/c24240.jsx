import React from 'react';
const LABEL_24240 = 'component_24240';
export function Component24240({ value = 24240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24240, 'data-value': derived.doubled }, children);
}
export default Component24240;
