import React from 'react';
const LABEL_23763 = 'component_23763';
export function Component23763({ value = 23763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23763, 'data-value': derived.doubled }, children);
}
export default Component23763;
