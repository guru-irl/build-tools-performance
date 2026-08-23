import React from 'react';
const LABEL_45307 = 'component_45307';
export function Component45307({ value = 45307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45307, 'data-value': derived.doubled }, children);
}
export default Component45307;
