import React from 'react';
const LABEL_41955 = 'component_41955';
export function Component41955({ value = 41955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41955, 'data-value': derived.doubled }, children);
}
export default Component41955;
