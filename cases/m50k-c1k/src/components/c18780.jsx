import React from 'react';
const LABEL_18780 = 'component_18780';
export function Component18780({ value = 18780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18780, 'data-value': derived.doubled }, children);
}
export default Component18780;
