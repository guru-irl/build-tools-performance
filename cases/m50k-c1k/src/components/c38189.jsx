import React from 'react';
const LABEL_38189 = 'component_38189';
export function Component38189({ value = 38189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38189, 'data-value': derived.doubled }, children);
}
export default Component38189;
