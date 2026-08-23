import React from 'react';
const LABEL_14788 = 'component_14788';
export function Component14788({ value = 14788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14788, 'data-value': derived.doubled }, children);
}
export default Component14788;
