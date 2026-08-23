import React from 'react';
const LABEL_16179 = 'component_16179';
export function Component16179({ value = 16179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16179, 'data-value': derived.doubled }, children);
}
export default Component16179;
