import React from 'react';
const LABEL_7381 = 'component_7381';
export function Component7381({ value = 7381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7381, 'data-value': derived.doubled }, children);
}
export default Component7381;
