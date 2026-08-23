import React from 'react';
const LABEL_22349 = 'component_22349';
export function Component22349({ value = 22349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22349, 'data-value': derived.doubled }, children);
}
export default Component22349;
