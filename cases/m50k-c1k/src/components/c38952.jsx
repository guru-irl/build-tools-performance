import React from 'react';
const LABEL_38952 = 'component_38952';
export function Component38952({ value = 38952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38952, 'data-value': derived.doubled }, children);
}
export default Component38952;
