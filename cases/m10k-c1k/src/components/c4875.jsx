import React from 'react';
const LABEL_4875 = 'component_4875';
export function Component4875({ value = 4875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4875, 'data-value': derived.doubled }, children);
}
export default Component4875;
