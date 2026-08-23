import React from 'react';
const LABEL_38754 = 'component_38754';
export function Component38754({ value = 38754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38754, 'data-value': derived.doubled }, children);
}
export default Component38754;
