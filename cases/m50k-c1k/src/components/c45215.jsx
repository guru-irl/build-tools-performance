import React from 'react';
const LABEL_45215 = 'component_45215';
export function Component45215({ value = 45215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45215, 'data-value': derived.doubled }, children);
}
export default Component45215;
