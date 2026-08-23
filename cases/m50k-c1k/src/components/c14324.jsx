import React from 'react';
const LABEL_14324 = 'component_14324';
export function Component14324({ value = 14324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14324, 'data-value': derived.doubled }, children);
}
export default Component14324;
