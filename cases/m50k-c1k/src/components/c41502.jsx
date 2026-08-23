import React from 'react';
const LABEL_41502 = 'component_41502';
export function Component41502({ value = 41502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41502, 'data-value': derived.doubled }, children);
}
export default Component41502;
