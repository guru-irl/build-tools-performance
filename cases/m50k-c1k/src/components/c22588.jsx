import React from 'react';
const LABEL_22588 = 'component_22588';
export function Component22588({ value = 22588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22588, 'data-value': derived.doubled }, children);
}
export default Component22588;
