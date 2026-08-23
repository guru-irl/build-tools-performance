import React from 'react';
const LABEL_26228 = 'component_26228';
export function Component26228({ value = 26228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26228, 'data-value': derived.doubled }, children);
}
export default Component26228;
