import React from 'react';
const LABEL_38153 = 'component_38153';
export function Component38153({ value = 38153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38153, 'data-value': derived.doubled }, children);
}
export default Component38153;
