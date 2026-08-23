import React from 'react';
const LABEL_9316 = 'component_9316';
export function Component9316({ value = 9316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9316, 'data-value': derived.doubled }, children);
}
export default Component9316;
