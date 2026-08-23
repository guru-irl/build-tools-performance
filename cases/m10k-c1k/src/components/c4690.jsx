import React from 'react';
const LABEL_4690 = 'component_4690';
export function Component4690({ value = 4690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4690, 'data-value': derived.doubled }, children);
}
export default Component4690;
