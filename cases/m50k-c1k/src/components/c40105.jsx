import React from 'react';
const LABEL_40105 = 'component_40105';
export function Component40105({ value = 40105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40105, 'data-value': derived.doubled }, children);
}
export default Component40105;
