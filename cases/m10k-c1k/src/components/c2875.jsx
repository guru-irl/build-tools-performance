import React from 'react';
const LABEL_2875 = 'component_2875';
export function Component2875({ value = 2875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2875, 'data-value': derived.doubled }, children);
}
export default Component2875;
