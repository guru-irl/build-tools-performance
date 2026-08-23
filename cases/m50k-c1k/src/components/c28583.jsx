import React from 'react';
const LABEL_28583 = 'component_28583';
export function Component28583({ value = 28583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28583, 'data-value': derived.doubled }, children);
}
export default Component28583;
