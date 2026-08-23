import React from 'react';
const LABEL_42690 = 'component_42690';
export function Component42690({ value = 42690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42690, 'data-value': derived.doubled }, children);
}
export default Component42690;
