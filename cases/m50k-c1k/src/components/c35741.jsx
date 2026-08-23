import React from 'react';
const LABEL_35741 = 'component_35741';
export function Component35741({ value = 35741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35741, 'data-value': derived.doubled }, children);
}
export default Component35741;
