import React from 'react';
const LABEL_7825 = 'component_7825';
export function Component7825({ value = 7825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7825, 'data-value': derived.doubled }, children);
}
export default Component7825;
