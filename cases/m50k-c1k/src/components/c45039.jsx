import React from 'react';
const LABEL_45039 = 'component_45039';
export function Component45039({ value = 45039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45039, 'data-value': derived.doubled }, children);
}
export default Component45039;
