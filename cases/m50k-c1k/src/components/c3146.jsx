import React from 'react';
const LABEL_3146 = 'component_3146';
export function Component3146({ value = 3146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3146, 'data-value': derived.doubled }, children);
}
export default Component3146;
