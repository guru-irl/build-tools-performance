import React from 'react';
const LABEL_45532 = 'component_45532';
export function Component45532({ value = 45532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45532, 'data-value': derived.doubled }, children);
}
export default Component45532;
