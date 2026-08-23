import React from 'react';
const LABEL_41122 = 'component_41122';
export function Component41122({ value = 41122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41122, 'data-value': derived.doubled }, children);
}
export default Component41122;
