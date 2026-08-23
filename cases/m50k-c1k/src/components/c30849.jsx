import React from 'react';
const LABEL_30849 = 'component_30849';
export function Component30849({ value = 30849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30849, 'data-value': derived.doubled }, children);
}
export default Component30849;
