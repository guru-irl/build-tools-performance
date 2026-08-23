import React from 'react';
const LABEL_4737 = 'component_4737';
export function Component4737({ value = 4737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4737, 'data-value': derived.doubled }, children);
}
export default Component4737;
