import React from 'react';
const LABEL_27748 = 'component_27748';
export function Component27748({ value = 27748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27748, 'data-value': derived.doubled }, children);
}
export default Component27748;
