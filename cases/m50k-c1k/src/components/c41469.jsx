import React from 'react';
const LABEL_41469 = 'component_41469';
export function Component41469({ value = 41469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41469, 'data-value': derived.doubled }, children);
}
export default Component41469;
