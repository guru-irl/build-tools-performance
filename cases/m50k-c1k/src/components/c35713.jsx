import React from 'react';
const LABEL_35713 = 'component_35713';
export function Component35713({ value = 35713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35713, 'data-value': derived.doubled }, children);
}
export default Component35713;
