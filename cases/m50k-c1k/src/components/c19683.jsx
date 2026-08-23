import React from 'react';
const LABEL_19683 = 'component_19683';
export function Component19683({ value = 19683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19683, 'data-value': derived.doubled }, children);
}
export default Component19683;
