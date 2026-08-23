import React from 'react';
const LABEL_26010 = 'component_26010';
export function Component26010({ value = 26010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26010, 'data-value': derived.doubled }, children);
}
export default Component26010;
