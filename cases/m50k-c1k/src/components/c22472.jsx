import React from 'react';
const LABEL_22472 = 'component_22472';
export function Component22472({ value = 22472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22472, 'data-value': derived.doubled }, children);
}
export default Component22472;
