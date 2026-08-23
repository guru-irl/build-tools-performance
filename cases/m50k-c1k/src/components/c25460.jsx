import React from 'react';
const LABEL_25460 = 'component_25460';
export function Component25460({ value = 25460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25460, 'data-value': derived.doubled }, children);
}
export default Component25460;
