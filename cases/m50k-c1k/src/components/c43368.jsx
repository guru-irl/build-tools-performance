import React from 'react';
const LABEL_43368 = 'component_43368';
export function Component43368({ value = 43368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43368, 'data-value': derived.doubled }, children);
}
export default Component43368;
