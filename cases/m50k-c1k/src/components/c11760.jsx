import React from 'react';
const LABEL_11760 = 'component_11760';
export function Component11760({ value = 11760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11760, 'data-value': derived.doubled }, children);
}
export default Component11760;
