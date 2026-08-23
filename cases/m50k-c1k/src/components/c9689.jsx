import React from 'react';
const LABEL_9689 = 'component_9689';
export function Component9689({ value = 9689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9689, 'data-value': derived.doubled }, children);
}
export default Component9689;
