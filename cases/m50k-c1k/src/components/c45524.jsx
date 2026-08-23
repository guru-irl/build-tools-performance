import React from 'react';
const LABEL_45524 = 'component_45524';
export function Component45524({ value = 45524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45524, 'data-value': derived.doubled }, children);
}
export default Component45524;
