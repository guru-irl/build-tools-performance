import React from 'react';
const LABEL_10734 = 'component_10734';
export function Component10734({ value = 10734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10734, 'data-value': derived.doubled }, children);
}
export default Component10734;
