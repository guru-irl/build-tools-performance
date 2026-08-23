import React from 'react';
const LABEL_40875 = 'component_40875';
export function Component40875({ value = 40875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40875, 'data-value': derived.doubled }, children);
}
export default Component40875;
