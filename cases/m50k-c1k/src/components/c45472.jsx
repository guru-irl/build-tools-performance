import React from 'react';
const LABEL_45472 = 'component_45472';
export function Component45472({ value = 45472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45472, 'data-value': derived.doubled }, children);
}
export default Component45472;
