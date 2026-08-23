import React from 'react';
const LABEL_3067 = 'component_3067';
export function Component3067({ value = 3067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3067, 'data-value': derived.doubled }, children);
}
export default Component3067;
