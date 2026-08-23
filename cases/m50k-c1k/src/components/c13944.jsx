import React from 'react';
const LABEL_13944 = 'component_13944';
export function Component13944({ value = 13944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13944, 'data-value': derived.doubled }, children);
}
export default Component13944;
