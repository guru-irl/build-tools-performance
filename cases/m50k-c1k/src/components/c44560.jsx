import React from 'react';
const LABEL_44560 = 'component_44560';
export function Component44560({ value = 44560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44560, 'data-value': derived.doubled }, children);
}
export default Component44560;
