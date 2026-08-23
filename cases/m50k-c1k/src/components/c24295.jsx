import React from 'react';
const LABEL_24295 = 'component_24295';
export function Component24295({ value = 24295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24295, 'data-value': derived.doubled }, children);
}
export default Component24295;
