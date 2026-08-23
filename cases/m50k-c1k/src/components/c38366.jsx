import React from 'react';
const LABEL_38366 = 'component_38366';
export function Component38366({ value = 38366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38366, 'data-value': derived.doubled }, children);
}
export default Component38366;
