import React from 'react';
const LABEL_44500 = 'component_44500';
export function Component44500({ value = 44500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44500, 'data-value': derived.doubled }, children);
}
export default Component44500;
