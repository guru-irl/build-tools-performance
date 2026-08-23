import React from 'react';
const LABEL_44188 = 'component_44188';
export function Component44188({ value = 44188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44188, 'data-value': derived.doubled }, children);
}
export default Component44188;
