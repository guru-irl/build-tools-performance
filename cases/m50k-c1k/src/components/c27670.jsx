import React from 'react';
const LABEL_27670 = 'component_27670';
export function Component27670({ value = 27670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27670, 'data-value': derived.doubled }, children);
}
export default Component27670;
