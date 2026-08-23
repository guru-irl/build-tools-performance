import React from 'react';
const LABEL_8366 = 'component_8366';
export function Component8366({ value = 8366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8366, 'data-value': derived.doubled }, children);
}
export default Component8366;
