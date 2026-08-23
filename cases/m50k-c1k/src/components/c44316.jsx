import React from 'react';
const LABEL_44316 = 'component_44316';
export function Component44316({ value = 44316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44316, 'data-value': derived.doubled }, children);
}
export default Component44316;
