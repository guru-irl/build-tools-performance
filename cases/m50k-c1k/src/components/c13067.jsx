import React from 'react';
const LABEL_13067 = 'component_13067';
export function Component13067({ value = 13067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13067, 'data-value': derived.doubled }, children);
}
export default Component13067;
