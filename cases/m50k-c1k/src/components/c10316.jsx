import React from 'react';
const LABEL_10316 = 'component_10316';
export function Component10316({ value = 10316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10316, 'data-value': derived.doubled }, children);
}
export default Component10316;
