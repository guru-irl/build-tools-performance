import React from 'react';
const LABEL_9381 = 'component_9381';
export function Component9381({ value = 9381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9381, 'data-value': derived.doubled }, children);
}
export default Component9381;
