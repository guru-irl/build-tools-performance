import React from 'react';
const LABEL_28716 = 'component_28716';
export function Component28716({ value = 28716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28716, 'data-value': derived.doubled }, children);
}
export default Component28716;
