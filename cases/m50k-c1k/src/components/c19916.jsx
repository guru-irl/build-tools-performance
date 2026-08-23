import React from 'react';
const LABEL_19916 = 'component_19916';
export function Component19916({ value = 19916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19916, 'data-value': derived.doubled }, children);
}
export default Component19916;
