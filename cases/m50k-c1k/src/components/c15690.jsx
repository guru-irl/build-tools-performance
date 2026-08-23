import React from 'react';
const LABEL_15690 = 'component_15690';
export function Component15690({ value = 15690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15690, 'data-value': derived.doubled }, children);
}
export default Component15690;
