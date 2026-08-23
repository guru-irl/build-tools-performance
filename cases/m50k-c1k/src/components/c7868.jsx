import React from 'react';
const LABEL_7868 = 'component_7868';
export function Component7868({ value = 7868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7868, 'data-value': derived.doubled }, children);
}
export default Component7868;
