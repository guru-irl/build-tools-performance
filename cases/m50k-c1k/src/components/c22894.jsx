import React from 'react';
const LABEL_22894 = 'component_22894';
export function Component22894({ value = 22894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22894, 'data-value': derived.doubled }, children);
}
export default Component22894;
