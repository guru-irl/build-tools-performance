import React from 'react';
const LABEL_10944 = 'component_10944';
export function Component10944({ value = 10944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10944, 'data-value': derived.doubled }, children);
}
export default Component10944;
