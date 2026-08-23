import React from 'react';
const LABEL_788 = 'component_788';
export function Component788({ value = 788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_788, 'data-value': derived.doubled }, children);
}
export default Component788;
