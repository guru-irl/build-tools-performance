import React from 'react';
const LABEL_21894 = 'component_21894';
export function Component21894({ value = 21894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21894, 'data-value': derived.doubled }, children);
}
export default Component21894;
