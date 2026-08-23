import React from 'react';
const LABEL_33316 = 'component_33316';
export function Component33316({ value = 33316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33316, 'data-value': derived.doubled }, children);
}
export default Component33316;
