import React from 'react';
const LABEL_20609 = 'component_20609';
export function Component20609({ value = 20609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20609, 'data-value': derived.doubled }, children);
}
export default Component20609;
