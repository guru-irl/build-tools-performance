import React from 'react';
const LABEL_10455 = 'component_10455';
export function Component10455({ value = 10455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10455, 'data-value': derived.doubled }, children);
}
export default Component10455;
