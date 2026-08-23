import React from 'react';
const LABEL_35295 = 'component_35295';
export function Component35295({ value = 35295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35295, 'data-value': derived.doubled }, children);
}
export default Component35295;
