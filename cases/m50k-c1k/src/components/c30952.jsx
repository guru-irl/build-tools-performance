import React from 'react';
const LABEL_30952 = 'component_30952';
export function Component30952({ value = 30952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30952, 'data-value': derived.doubled }, children);
}
export default Component30952;
