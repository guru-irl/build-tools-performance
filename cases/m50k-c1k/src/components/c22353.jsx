import React from 'react';
const LABEL_22353 = 'component_22353';
export function Component22353({ value = 22353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22353, 'data-value': derived.doubled }, children);
}
export default Component22353;
