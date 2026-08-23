import React from 'react';
const LABEL_3366 = 'component_3366';
export function Component3366({ value = 3366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3366, 'data-value': derived.doubled }, children);
}
export default Component3366;
