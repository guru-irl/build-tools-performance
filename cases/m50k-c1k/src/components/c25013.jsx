import React from 'react';
const LABEL_25013 = 'component_25013';
export function Component25013({ value = 25013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25013, 'data-value': derived.doubled }, children);
}
export default Component25013;
