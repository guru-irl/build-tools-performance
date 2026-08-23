import React from 'react';
const LABEL_29366 = 'component_29366';
export function Component29366({ value = 29366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29366, 'data-value': derived.doubled }, children);
}
export default Component29366;
