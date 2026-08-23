import React from 'react';
const LABEL_27867 = 'component_27867';
export function Component27867({ value = 27867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27867, 'data-value': derived.doubled }, children);
}
export default Component27867;
