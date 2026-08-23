import React from 'react';
const LABEL_13609 = 'component_13609';
export function Component13609({ value = 13609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13609, 'data-value': derived.doubled }, children);
}
export default Component13609;
