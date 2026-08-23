import React from 'react';
const LABEL_4708 = 'component_4708';
export function Component4708({ value = 4708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4708, 'data-value': derived.doubled }, children);
}
export default Component4708;
