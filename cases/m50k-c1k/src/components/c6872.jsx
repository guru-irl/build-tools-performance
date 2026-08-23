import React from 'react';
const LABEL_6872 = 'component_6872';
export function Component6872({ value = 6872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6872, 'data-value': derived.doubled }, children);
}
export default Component6872;
