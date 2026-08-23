import React from 'react';
const LABEL_40909 = 'component_40909';
export function Component40909({ value = 40909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40909, 'data-value': derived.doubled }, children);
}
export default Component40909;
