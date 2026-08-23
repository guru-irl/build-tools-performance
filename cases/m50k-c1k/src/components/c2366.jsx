import React from 'react';
const LABEL_2366 = 'component_2366';
export function Component2366({ value = 2366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2366, 'data-value': derived.doubled }, children);
}
export default Component2366;
