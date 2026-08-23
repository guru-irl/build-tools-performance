import React from 'react';
const LABEL_25349 = 'component_25349';
export function Component25349({ value = 25349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25349, 'data-value': derived.doubled }, children);
}
export default Component25349;
