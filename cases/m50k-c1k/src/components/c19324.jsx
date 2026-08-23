import React from 'react';
const LABEL_19324 = 'component_19324';
export function Component19324({ value = 19324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19324, 'data-value': derived.doubled }, children);
}
export default Component19324;
