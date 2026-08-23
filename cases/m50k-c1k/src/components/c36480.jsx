import React from 'react';
const LABEL_36480 = 'component_36480';
export function Component36480({ value = 36480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36480, 'data-value': derived.doubled }, children);
}
export default Component36480;
