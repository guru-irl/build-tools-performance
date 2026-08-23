import React from 'react';
const LABEL_44260 = 'component_44260';
export function Component44260({ value = 44260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44260, 'data-value': derived.doubled }, children);
}
export default Component44260;
