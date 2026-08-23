import React from 'react';
const LABEL_20683 = 'component_20683';
export function Component20683({ value = 20683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20683, 'data-value': derived.doubled }, children);
}
export default Component20683;
