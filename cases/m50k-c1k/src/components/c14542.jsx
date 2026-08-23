import React from 'react';
const LABEL_14542 = 'component_14542';
export function Component14542({ value = 14542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14542, 'data-value': derived.doubled }, children);
}
export default Component14542;
