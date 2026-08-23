import React from 'react';
const LABEL_2058 = 'component_2058';
export function Component2058({ value = 2058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2058, 'data-value': derived.doubled }, children);
}
export default Component2058;
