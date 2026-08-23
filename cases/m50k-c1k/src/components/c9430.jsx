import React from 'react';
const LABEL_9430 = 'component_9430';
export function Component9430({ value = 9430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9430, 'data-value': derived.doubled }, children);
}
export default Component9430;
