import React from 'react';
const LABEL_25366 = 'component_25366';
export function Component25366({ value = 25366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25366, 'data-value': derived.doubled }, children);
}
export default Component25366;
