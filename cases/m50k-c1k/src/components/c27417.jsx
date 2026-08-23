import React from 'react';
const LABEL_27417 = 'component_27417';
export function Component27417({ value = 27417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27417, 'data-value': derived.doubled }, children);
}
export default Component27417;
