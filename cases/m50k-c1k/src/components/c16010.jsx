import React from 'react';
const LABEL_16010 = 'component_16010';
export function Component16010({ value = 16010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16010, 'data-value': derived.doubled }, children);
}
export default Component16010;
