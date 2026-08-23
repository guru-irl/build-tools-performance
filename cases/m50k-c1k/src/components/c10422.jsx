import React from 'react';
const LABEL_10422 = 'component_10422';
export function Component10422({ value = 10422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10422, 'data-value': derived.doubled }, children);
}
export default Component10422;
