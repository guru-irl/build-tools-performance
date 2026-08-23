import React from 'react';
const LABEL_18880 = 'component_18880';
export function Component18880({ value = 18880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18880, 'data-value': derived.doubled }, children);
}
export default Component18880;
