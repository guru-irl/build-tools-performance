import React from 'react';
const LABEL_45079 = 'component_45079';
export function Component45079({ value = 45079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45079, 'data-value': derived.doubled }, children);
}
export default Component45079;
