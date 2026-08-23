import React from 'react';
const LABEL_2996 = 'component_2996';
export function Component2996({ value = 2996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2996, 'data-value': derived.doubled }, children);
}
export default Component2996;
