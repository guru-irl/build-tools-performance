import React from 'react';
const LABEL_11455 = 'component_11455';
export function Component11455({ value = 11455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11455, 'data-value': derived.doubled }, children);
}
export default Component11455;
