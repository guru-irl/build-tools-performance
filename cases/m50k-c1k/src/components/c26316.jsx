import React from 'react';
const LABEL_26316 = 'component_26316';
export function Component26316({ value = 26316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26316, 'data-value': derived.doubled }, children);
}
export default Component26316;
