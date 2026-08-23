import React from 'react';
const LABEL_27693 = 'component_27693';
export function Component27693({ value = 27693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27693, 'data-value': derived.doubled }, children);
}
export default Component27693;
