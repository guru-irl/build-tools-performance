import React from 'react';
const LABEL_3699 = 'component_3699';
export function Component3699({ value = 3699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3699, 'data-value': derived.doubled }, children);
}
export default Component3699;
