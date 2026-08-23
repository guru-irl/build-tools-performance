import React from 'react';
const LABEL_25329 = 'component_25329';
export function Component25329({ value = 25329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25329, 'data-value': derived.doubled }, children);
}
export default Component25329;
