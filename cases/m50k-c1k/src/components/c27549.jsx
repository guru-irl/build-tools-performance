import React from 'react';
const LABEL_27549 = 'component_27549';
export function Component27549({ value = 27549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27549, 'data-value': derived.doubled }, children);
}
export default Component27549;
