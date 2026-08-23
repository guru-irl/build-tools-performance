import React from 'react';
const LABEL_18405 = 'component_18405';
export function Component18405({ value = 18405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18405, 'data-value': derived.doubled }, children);
}
export default Component18405;
