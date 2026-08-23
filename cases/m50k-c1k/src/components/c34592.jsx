import React from 'react';
const LABEL_34592 = 'component_34592';
export function Component34592({ value = 34592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34592, 'data-value': derived.doubled }, children);
}
export default Component34592;
