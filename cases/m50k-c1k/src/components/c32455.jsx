import React from 'react';
const LABEL_32455 = 'component_32455';
export function Component32455({ value = 32455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32455, 'data-value': derived.doubled }, children);
}
export default Component32455;
