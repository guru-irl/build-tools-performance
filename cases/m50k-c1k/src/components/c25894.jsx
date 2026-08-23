import React from 'react';
const LABEL_25894 = 'component_25894';
export function Component25894({ value = 25894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25894, 'data-value': derived.doubled }, children);
}
export default Component25894;
