import React from 'react';
const LABEL_26033 = 'component_26033';
export function Component26033({ value = 26033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26033, 'data-value': derived.doubled }, children);
}
export default Component26033;
