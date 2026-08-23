import React from 'react';
const LABEL_11316 = 'component_11316';
export function Component11316({ value = 11316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11316, 'data-value': derived.doubled }, children);
}
export default Component11316;
