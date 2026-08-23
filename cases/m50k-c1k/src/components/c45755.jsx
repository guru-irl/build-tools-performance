import React from 'react';
const LABEL_45755 = 'component_45755';
export function Component45755({ value = 45755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45755, 'data-value': derived.doubled }, children);
}
export default Component45755;
