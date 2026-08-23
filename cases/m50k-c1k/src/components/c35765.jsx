import React from 'react';
const LABEL_35765 = 'component_35765';
export function Component35765({ value = 35765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35765, 'data-value': derived.doubled }, children);
}
export default Component35765;
