import React from 'react';
const LABEL_4663 = 'component_4663';
export function Component4663({ value = 4663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4663, 'data-value': derived.doubled }, children);
}
export default Component4663;
