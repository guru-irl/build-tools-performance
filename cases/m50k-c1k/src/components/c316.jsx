import React from 'react';
const LABEL_316 = 'component_316';
export function Component316({ value = 316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_316, 'data-value': derived.doubled }, children);
}
export default Component316;
