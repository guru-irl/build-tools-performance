import React from 'react';
const LABEL_27752 = 'component_27752';
export function Component27752({ value = 27752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27752, 'data-value': derived.doubled }, children);
}
export default Component27752;
