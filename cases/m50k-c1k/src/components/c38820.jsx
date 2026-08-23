import React from 'react';
const LABEL_38820 = 'component_38820';
export function Component38820({ value = 38820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38820, 'data-value': derived.doubled }, children);
}
export default Component38820;
