import React from 'react';
const LABEL_28460 = 'component_28460';
export function Component28460({ value = 28460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28460, 'data-value': derived.doubled }, children);
}
export default Component28460;
