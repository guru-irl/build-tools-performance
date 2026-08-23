import React from 'react';
const LABEL_25405 = 'component_25405';
export function Component25405({ value = 25405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25405, 'data-value': derived.doubled }, children);
}
export default Component25405;
