import React from 'react';
const LABEL_35316 = 'component_35316';
export function Component35316({ value = 35316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35316, 'data-value': derived.doubled }, children);
}
export default Component35316;
