import React from 'react';
const LABEL_31767 = 'component_31767';
export function Component31767({ value = 31767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31767, 'data-value': derived.doubled }, children);
}
export default Component31767;
