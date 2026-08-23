import React from 'react';
const LABEL_14548 = 'component_14548';
export function Component14548({ value = 14548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14548, 'data-value': derived.doubled }, children);
}
export default Component14548;
