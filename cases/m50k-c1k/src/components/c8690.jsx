import React from 'react';
const LABEL_8690 = 'component_8690';
export function Component8690({ value = 8690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8690, 'data-value': derived.doubled }, children);
}
export default Component8690;
