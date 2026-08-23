import React from 'react';
const LABEL_38438 = 'component_38438';
export function Component38438({ value = 38438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38438, 'data-value': derived.doubled }, children);
}
export default Component38438;
