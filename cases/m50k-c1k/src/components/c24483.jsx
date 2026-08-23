import React from 'react';
const LABEL_24483 = 'component_24483';
export function Component24483({ value = 24483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24483, 'data-value': derived.doubled }, children);
}
export default Component24483;
