import React from 'react';
const LABEL_35686 = 'component_35686';
export function Component35686({ value = 35686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35686, 'data-value': derived.doubled }, children);
}
export default Component35686;
