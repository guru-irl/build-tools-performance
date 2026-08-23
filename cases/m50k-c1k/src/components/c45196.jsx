import React from 'react';
const LABEL_45196 = 'component_45196';
export function Component45196({ value = 45196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45196, 'data-value': derived.doubled }, children);
}
export default Component45196;
