import React from 'react';
const LABEL_45084 = 'component_45084';
export function Component45084({ value = 45084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45084, 'data-value': derived.doubled }, children);
}
export default Component45084;
