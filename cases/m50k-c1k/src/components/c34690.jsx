import React from 'react';
const LABEL_34690 = 'component_34690';
export function Component34690({ value = 34690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34690, 'data-value': derived.doubled }, children);
}
export default Component34690;
