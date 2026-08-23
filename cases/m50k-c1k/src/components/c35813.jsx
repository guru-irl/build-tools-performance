import React from 'react';
const LABEL_35813 = 'component_35813';
export function Component35813({ value = 35813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35813, 'data-value': derived.doubled }, children);
}
export default Component35813;
