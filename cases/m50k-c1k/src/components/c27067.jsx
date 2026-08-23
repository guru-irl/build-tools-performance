import React from 'react';
const LABEL_27067 = 'component_27067';
export function Component27067({ value = 27067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27067, 'data-value': derived.doubled }, children);
}
export default Component27067;
