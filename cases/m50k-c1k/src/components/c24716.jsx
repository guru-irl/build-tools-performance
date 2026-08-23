import React from 'react';
const LABEL_24716 = 'component_24716';
export function Component24716({ value = 24716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24716, 'data-value': derived.doubled }, children);
}
export default Component24716;
