import React from 'react';
const LABEL_7316 = 'component_7316';
export function Component7316({ value = 7316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7316, 'data-value': derived.doubled }, children);
}
export default Component7316;
