import React from 'react';
const LABEL_35140 = 'component_35140';
export function Component35140({ value = 35140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35140, 'data-value': derived.doubled }, children);
}
export default Component35140;
