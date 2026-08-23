import React from 'react';
const LABEL_6583 = 'component_6583';
export function Component6583({ value = 6583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6583, 'data-value': derived.doubled }, children);
}
export default Component6583;
