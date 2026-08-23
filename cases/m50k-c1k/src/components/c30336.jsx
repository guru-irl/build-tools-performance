import React from 'react';
const LABEL_30336 = 'component_30336';
export function Component30336({ value = 30336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30336, 'data-value': derived.doubled }, children);
}
export default Component30336;
