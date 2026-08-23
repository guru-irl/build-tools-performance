import React from 'react';
const LABEL_24316 = 'component_24316';
export function Component24316({ value = 24316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24316, 'data-value': derived.doubled }, children);
}
export default Component24316;
