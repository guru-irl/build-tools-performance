import React from 'react';
const LABEL_24174 = 'component_24174';
export function Component24174({ value = 24174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24174, 'data-value': derived.doubled }, children);
}
export default Component24174;
