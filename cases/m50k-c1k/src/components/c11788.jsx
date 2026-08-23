import React from 'react';
const LABEL_11788 = 'component_11788';
export function Component11788({ value = 11788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11788, 'data-value': derived.doubled }, children);
}
export default Component11788;
