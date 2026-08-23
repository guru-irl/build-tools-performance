import React from 'react';
const LABEL_40609 = 'component_40609';
export function Component40609({ value = 40609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40609, 'data-value': derived.doubled }, children);
}
export default Component40609;
