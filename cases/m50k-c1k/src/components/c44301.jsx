import React from 'react';
const LABEL_44301 = 'component_44301';
export function Component44301({ value = 44301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44301, 'data-value': derived.doubled }, children);
}
export default Component44301;
