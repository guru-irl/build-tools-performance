import React from 'react';
const LABEL_40754 = 'component_40754';
export function Component40754({ value = 40754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40754, 'data-value': derived.doubled }, children);
}
export default Component40754;
