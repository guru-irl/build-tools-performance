import React from 'react';
const LABEL_45104 = 'component_45104';
export function Component45104({ value = 45104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45104, 'data-value': derived.doubled }, children);
}
export default Component45104;
