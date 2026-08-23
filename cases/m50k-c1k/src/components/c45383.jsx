import React from 'react';
const LABEL_45383 = 'component_45383';
export function Component45383({ value = 45383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45383, 'data-value': derived.doubled }, children);
}
export default Component45383;
