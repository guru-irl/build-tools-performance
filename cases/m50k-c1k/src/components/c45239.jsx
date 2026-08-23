import React from 'react';
const LABEL_45239 = 'component_45239';
export function Component45239({ value = 45239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45239, 'data-value': derived.doubled }, children);
}
export default Component45239;
