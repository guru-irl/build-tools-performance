import React from 'react';
const LABEL_4127 = 'component_4127';
export function Component4127({ value = 4127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4127, 'data-value': derived.doubled }, children);
}
export default Component4127;
