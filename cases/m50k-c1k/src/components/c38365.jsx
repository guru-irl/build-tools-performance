import React from 'react';
const LABEL_38365 = 'component_38365';
export function Component38365({ value = 38365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38365, 'data-value': derived.doubled }, children);
}
export default Component38365;
