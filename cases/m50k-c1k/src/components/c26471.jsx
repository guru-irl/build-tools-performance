import React from 'react';
const LABEL_26471 = 'component_26471';
export function Component26471({ value = 26471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26471, 'data-value': derived.doubled }, children);
}
export default Component26471;
