import React from 'react';
const LABEL_23316 = 'component_23316';
export function Component23316({ value = 23316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23316, 'data-value': derived.doubled }, children);
}
export default Component23316;
