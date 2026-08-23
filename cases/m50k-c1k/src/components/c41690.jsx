import React from 'react';
const LABEL_41690 = 'component_41690';
export function Component41690({ value = 41690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41690, 'data-value': derived.doubled }, children);
}
export default Component41690;
