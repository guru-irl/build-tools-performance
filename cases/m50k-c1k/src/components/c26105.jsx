import React from 'react';
const LABEL_26105 = 'component_26105';
export function Component26105({ value = 26105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26105, 'data-value': derived.doubled }, children);
}
export default Component26105;
