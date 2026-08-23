import React from 'react';
const LABEL_45026 = 'component_45026';
export function Component45026({ value = 45026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45026, 'data-value': derived.doubled }, children);
}
export default Component45026;
