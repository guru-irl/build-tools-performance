import React from 'react';
const LABEL_19387 = 'component_19387';
export function Component19387({ value = 19387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19387, 'data-value': derived.doubled }, children);
}
export default Component19387;
