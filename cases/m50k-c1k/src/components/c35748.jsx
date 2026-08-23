import React from 'react';
const LABEL_35748 = 'component_35748';
export function Component35748({ value = 35748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35748, 'data-value': derived.doubled }, children);
}
export default Component35748;
