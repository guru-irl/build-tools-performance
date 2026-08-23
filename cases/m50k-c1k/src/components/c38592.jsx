import React from 'react';
const LABEL_38592 = 'component_38592';
export function Component38592({ value = 38592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38592, 'data-value': derived.doubled }, children);
}
export default Component38592;
