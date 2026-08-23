import React from 'react';
const LABEL_40968 = 'component_40968';
export function Component40968({ value = 40968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40968, 'data-value': derived.doubled }, children);
}
export default Component40968;
