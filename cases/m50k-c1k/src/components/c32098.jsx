import React from 'react';
const LABEL_32098 = 'component_32098';
export function Component32098({ value = 32098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32098, 'data-value': derived.doubled }, children);
}
export default Component32098;
