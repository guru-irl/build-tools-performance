import React from 'react';
const LABEL_40318 = 'component_40318';
export function Component40318({ value = 40318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40318, 'data-value': derived.doubled }, children);
}
export default Component40318;
