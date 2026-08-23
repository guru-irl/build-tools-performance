import React from 'react';
const LABEL_22067 = 'component_22067';
export function Component22067({ value = 22067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22067, 'data-value': derived.doubled }, children);
}
export default Component22067;
