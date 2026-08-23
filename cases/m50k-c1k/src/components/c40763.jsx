import React from 'react';
const LABEL_40763 = 'component_40763';
export function Component40763({ value = 40763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40763, 'data-value': derived.doubled }, children);
}
export default Component40763;
