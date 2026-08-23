import React from 'react';
const LABEL_2927 = 'component_2927';
export function Component2927({ value = 2927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2927, 'data-value': derived.doubled }, children);
}
export default Component2927;
