import React from 'react';
const LABEL_16316 = 'component_16316';
export function Component16316({ value = 16316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16316, 'data-value': derived.doubled }, children);
}
export default Component16316;
