import React from 'react';
const LABEL_7140 = 'component_7140';
export function Component7140({ value = 7140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7140, 'data-value': derived.doubled }, children);
}
export default Component7140;
