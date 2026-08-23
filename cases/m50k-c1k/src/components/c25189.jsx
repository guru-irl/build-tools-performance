import React from 'react';
const LABEL_25189 = 'component_25189';
export function Component25189({ value = 25189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25189, 'data-value': derived.doubled }, children);
}
export default Component25189;
