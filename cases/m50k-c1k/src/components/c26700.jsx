import React from 'react';
const LABEL_26700 = 'component_26700';
export function Component26700({ value = 26700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26700, 'data-value': derived.doubled }, children);
}
export default Component26700;
