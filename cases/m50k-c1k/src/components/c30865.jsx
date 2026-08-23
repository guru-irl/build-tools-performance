import React from 'react';
const LABEL_30865 = 'component_30865';
export function Component30865({ value = 30865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30865, 'data-value': derived.doubled }, children);
}
export default Component30865;
