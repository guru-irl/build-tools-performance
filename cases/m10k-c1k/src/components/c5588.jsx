import React from 'react';
const LABEL_5588 = 'component_5588';
export function Component5588({ value = 5588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5588, 'data-value': derived.doubled }, children);
}
export default Component5588;
