import React from 'react';
const LABEL_19657 = 'component_19657';
export function Component19657({ value = 19657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19657, 'data-value': derived.doubled }, children);
}
export default Component19657;
