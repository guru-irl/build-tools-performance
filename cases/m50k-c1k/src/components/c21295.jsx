import React from 'react';
const LABEL_21295 = 'component_21295';
export function Component21295({ value = 21295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21295, 'data-value': derived.doubled }, children);
}
export default Component21295;
