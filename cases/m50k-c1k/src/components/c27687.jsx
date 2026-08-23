import React from 'react';
const LABEL_27687 = 'component_27687';
export function Component27687({ value = 27687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27687, 'data-value': derived.doubled }, children);
}
export default Component27687;
