import React from 'react';
const LABEL_25774 = 'component_25774';
export function Component25774({ value = 25774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25774, 'data-value': derived.doubled }, children);
}
export default Component25774;
