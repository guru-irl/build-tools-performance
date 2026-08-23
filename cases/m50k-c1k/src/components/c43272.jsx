import React from 'react';
const LABEL_43272 = 'component_43272';
export function Component43272({ value = 43272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43272, 'data-value': derived.doubled }, children);
}
export default Component43272;
