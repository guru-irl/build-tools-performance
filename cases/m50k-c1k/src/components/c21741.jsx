import React from 'react';
const LABEL_21741 = 'component_21741';
export function Component21741({ value = 21741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21741, 'data-value': derived.doubled }, children);
}
export default Component21741;
