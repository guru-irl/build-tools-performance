import React from 'react';
const LABEL_19948 = 'component_19948';
export function Component19948({ value = 19948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19948, 'data-value': derived.doubled }, children);
}
export default Component19948;
