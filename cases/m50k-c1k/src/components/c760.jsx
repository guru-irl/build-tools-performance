import React from 'react';
const LABEL_760 = 'component_760';
export function Component760({ value = 760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_760, 'data-value': derived.doubled }, children);
}
export default Component760;
