import React from 'react';
const LABEL_37381 = 'component_37381';
export function Component37381({ value = 37381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37381, 'data-value': derived.doubled }, children);
}
export default Component37381;
