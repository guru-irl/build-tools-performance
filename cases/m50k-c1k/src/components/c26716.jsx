import React from 'react';
const LABEL_26716 = 'component_26716';
export function Component26716({ value = 26716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26716, 'data-value': derived.doubled }, children);
}
export default Component26716;
