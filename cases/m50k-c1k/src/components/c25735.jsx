import React from 'react';
const LABEL_25735 = 'component_25735';
export function Component25735({ value = 25735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25735, 'data-value': derived.doubled }, children);
}
export default Component25735;
