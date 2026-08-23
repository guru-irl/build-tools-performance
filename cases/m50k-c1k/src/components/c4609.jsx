import React from 'react';
const LABEL_4609 = 'component_4609';
export function Component4609({ value = 4609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4609, 'data-value': derived.doubled }, children);
}
export default Component4609;
