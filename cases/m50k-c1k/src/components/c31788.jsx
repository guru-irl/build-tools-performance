import React from 'react';
const LABEL_31788 = 'component_31788';
export function Component31788({ value = 31788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31788, 'data-value': derived.doubled }, children);
}
export default Component31788;
