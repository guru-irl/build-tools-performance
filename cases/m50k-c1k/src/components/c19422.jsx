import React from 'react';
const LABEL_19422 = 'component_19422';
export function Component19422({ value = 19422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19422, 'data-value': derived.doubled }, children);
}
export default Component19422;
