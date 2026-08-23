import React from 'react';
const LABEL_8480 = 'component_8480';
export function Component8480({ value = 8480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8480, 'data-value': derived.doubled }, children);
}
export default Component8480;
