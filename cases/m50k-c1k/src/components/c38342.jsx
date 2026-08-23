import React from 'react';
const LABEL_38342 = 'component_38342';
export function Component38342({ value = 38342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38342, 'data-value': derived.doubled }, children);
}
export default Component38342;
