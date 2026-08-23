import React from 'react';
const LABEL_7366 = 'component_7366';
export function Component7366({ value = 7366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7366, 'data-value': derived.doubled }, children);
}
export default Component7366;
