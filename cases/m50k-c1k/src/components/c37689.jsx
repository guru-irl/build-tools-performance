import React from 'react';
const LABEL_37689 = 'component_37689';
export function Component37689({ value = 37689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37689, 'data-value': derived.doubled }, children);
}
export default Component37689;
