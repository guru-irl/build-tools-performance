import React from 'react';
const LABEL_11480 = 'component_11480';
export function Component11480({ value = 11480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11480, 'data-value': derived.doubled }, children);
}
export default Component11480;
