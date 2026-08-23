import React from 'react';
const LABEL_37366 = 'component_37366';
export function Component37366({ value = 37366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37366, 'data-value': derived.doubled }, children);
}
export default Component37366;
