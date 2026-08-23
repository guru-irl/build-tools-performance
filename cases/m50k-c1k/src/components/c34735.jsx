import React from 'react';
const LABEL_34735 = 'component_34735';
export function Component34735({ value = 34735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34735, 'data-value': derived.doubled }, children);
}
export default Component34735;
