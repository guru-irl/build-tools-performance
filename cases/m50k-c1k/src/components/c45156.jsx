import React from 'react';
const LABEL_45156 = 'component_45156';
export function Component45156({ value = 45156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45156, 'data-value': derived.doubled }, children);
}
export default Component45156;
