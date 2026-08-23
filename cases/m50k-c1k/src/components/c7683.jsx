import React from 'react';
const LABEL_7683 = 'component_7683';
export function Component7683({ value = 7683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7683, 'data-value': derived.doubled }, children);
}
export default Component7683;
