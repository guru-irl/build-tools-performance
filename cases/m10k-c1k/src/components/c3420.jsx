import React from 'react';
const LABEL_3420 = 'component_3420';
export function Component3420({ value = 3420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3420, 'data-value': derived.doubled }, children);
}
export default Component3420;
