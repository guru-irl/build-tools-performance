import React from 'react';
const LABEL_13788 = 'component_13788';
export function Component13788({ value = 13788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13788, 'data-value': derived.doubled }, children);
}
export default Component13788;
