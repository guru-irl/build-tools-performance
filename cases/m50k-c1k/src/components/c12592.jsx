import React from 'react';
const LABEL_12592 = 'component_12592';
export function Component12592({ value = 12592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12592, 'data-value': derived.doubled }, children);
}
export default Component12592;
