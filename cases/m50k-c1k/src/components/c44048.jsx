import React from 'react';
const LABEL_44048 = 'component_44048';
export function Component44048({ value = 44048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44048, 'data-value': derived.doubled }, children);
}
export default Component44048;
