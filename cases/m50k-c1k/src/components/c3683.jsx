import React from 'react';
const LABEL_3683 = 'component_3683';
export function Component3683({ value = 3683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3683, 'data-value': derived.doubled }, children);
}
export default Component3683;
