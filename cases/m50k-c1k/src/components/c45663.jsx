import React from 'react';
const LABEL_45663 = 'component_45663';
export function Component45663({ value = 45663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45663, 'data-value': derived.doubled }, children);
}
export default Component45663;
