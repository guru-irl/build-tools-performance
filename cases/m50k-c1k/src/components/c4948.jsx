import React from 'react';
const LABEL_4948 = 'component_4948';
export function Component4948({ value = 4948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4948, 'data-value': derived.doubled }, children);
}
export default Component4948;
