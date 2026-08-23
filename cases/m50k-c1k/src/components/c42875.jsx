import React from 'react';
const LABEL_42875 = 'component_42875';
export function Component42875({ value = 42875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42875, 'data-value': derived.doubled }, children);
}
export default Component42875;
