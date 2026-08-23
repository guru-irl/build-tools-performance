import React from 'react';
const LABEL_46734 = 'component_46734';
export function Component46734({ value = 46734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46734, 'data-value': derived.doubled }, children);
}
export default Component46734;
