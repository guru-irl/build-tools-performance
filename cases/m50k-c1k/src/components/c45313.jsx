import React from 'react';
const LABEL_45313 = 'component_45313';
export function Component45313({ value = 45313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45313, 'data-value': derived.doubled }, children);
}
export default Component45313;
