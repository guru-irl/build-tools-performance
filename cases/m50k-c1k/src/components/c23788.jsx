import React from 'react';
const LABEL_23788 = 'component_23788';
export function Component23788({ value = 23788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23788, 'data-value': derived.doubled }, children);
}
export default Component23788;
