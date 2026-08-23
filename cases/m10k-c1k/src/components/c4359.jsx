import React from 'react';
const LABEL_4359 = 'component_4359';
export function Component4359({ value = 4359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4359, 'data-value': derived.doubled }, children);
}
export default Component4359;
