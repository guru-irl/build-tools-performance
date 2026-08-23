import React from 'react';
const LABEL_45373 = 'component_45373';
export function Component45373({ value = 45373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45373, 'data-value': derived.doubled }, children);
}
export default Component45373;
