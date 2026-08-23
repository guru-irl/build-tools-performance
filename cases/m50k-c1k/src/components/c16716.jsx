import React from 'react';
const LABEL_16716 = 'component_16716';
export function Component16716({ value = 16716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16716, 'data-value': derived.doubled }, children);
}
export default Component16716;
