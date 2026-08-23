import React from 'react';
const LABEL_22788 = 'component_22788';
export function Component22788({ value = 22788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22788, 'data-value': derived.doubled }, children);
}
export default Component22788;
