import React from 'react';
const LABEL_45232 = 'component_45232';
export function Component45232({ value = 45232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45232, 'data-value': derived.doubled }, children);
}
export default Component45232;
