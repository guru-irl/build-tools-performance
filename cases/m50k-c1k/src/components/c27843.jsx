import React from 'react';
const LABEL_27843 = 'component_27843';
export function Component27843({ value = 27843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27843, 'data-value': derived.doubled }, children);
}
export default Component27843;
