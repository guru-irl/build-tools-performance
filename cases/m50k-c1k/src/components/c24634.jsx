import React from 'react';
const LABEL_24634 = 'component_24634';
export function Component24634({ value = 24634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24634, 'data-value': derived.doubled }, children);
}
export default Component24634;
