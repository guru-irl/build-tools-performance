import React from 'react';
const LABEL_37657 = 'component_37657';
export function Component37657({ value = 37657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37657, 'data-value': derived.doubled }, children);
}
export default Component37657;
