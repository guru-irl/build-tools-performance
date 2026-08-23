import React from 'react';
const LABEL_38144 = 'component_38144';
export function Component38144({ value = 38144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38144, 'data-value': derived.doubled }, children);
}
export default Component38144;
