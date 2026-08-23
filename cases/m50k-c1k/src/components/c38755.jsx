import React from 'react';
const LABEL_38755 = 'component_38755';
export function Component38755({ value = 38755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38755, 'data-value': derived.doubled }, children);
}
export default Component38755;
