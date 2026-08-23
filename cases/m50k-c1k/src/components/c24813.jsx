import React from 'react';
const LABEL_24813 = 'component_24813';
export function Component24813({ value = 24813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24813, 'data-value': derived.doubled }, children);
}
export default Component24813;
