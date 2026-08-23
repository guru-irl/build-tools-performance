import React from 'react';
const LABEL_28316 = 'component_28316';
export function Component28316({ value = 28316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28316, 'data-value': derived.doubled }, children);
}
export default Component28316;
