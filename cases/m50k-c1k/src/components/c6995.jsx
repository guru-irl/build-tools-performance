import React from 'react';
const LABEL_6995 = 'component_6995';
export function Component6995({ value = 6995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6995, 'data-value': derived.doubled }, children);
}
export default Component6995;
