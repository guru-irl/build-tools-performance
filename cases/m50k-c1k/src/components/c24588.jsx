import React from 'react';
const LABEL_24588 = 'component_24588';
export function Component24588({ value = 24588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24588, 'data-value': derived.doubled }, children);
}
export default Component24588;
