import React from 'react';
const LABEL_19172 = 'component_19172';
export function Component19172({ value = 19172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19172, 'data-value': derived.doubled }, children);
}
export default Component19172;
