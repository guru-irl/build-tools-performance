import React from 'react';
const LABEL_2067 = 'component_2067';
export function Component2067({ value = 2067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2067, 'data-value': derived.doubled }, children);
}
export default Component2067;
