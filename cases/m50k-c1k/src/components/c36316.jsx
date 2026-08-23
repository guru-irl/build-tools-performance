import React from 'react';
const LABEL_36316 = 'component_36316';
export function Component36316({ value = 36316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36316, 'data-value': derived.doubled }, children);
}
export default Component36316;
