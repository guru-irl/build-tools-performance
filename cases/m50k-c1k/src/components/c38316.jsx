import React from 'react';
const LABEL_38316 = 'component_38316';
export function Component38316({ value = 38316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38316, 'data-value': derived.doubled }, children);
}
export default Component38316;
