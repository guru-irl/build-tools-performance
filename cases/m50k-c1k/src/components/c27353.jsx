import React from 'react';
const LABEL_27353 = 'component_27353';
export function Component27353({ value = 27353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27353, 'data-value': derived.doubled }, children);
}
export default Component27353;
