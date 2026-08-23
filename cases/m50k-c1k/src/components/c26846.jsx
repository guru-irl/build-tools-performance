import React from 'react';
const LABEL_26846 = 'component_26846';
export function Component26846({ value = 26846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26846, 'data-value': derived.doubled }, children);
}
export default Component26846;
