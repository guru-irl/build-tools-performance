import React from 'react';
const LABEL_27646 = 'component_27646';
export function Component27646({ value = 27646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27646, 'data-value': derived.doubled }, children);
}
export default Component27646;
