import React from 'react';
const LABEL_26838 = 'component_26838';
export function Component26838({ value = 26838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26838, 'data-value': derived.doubled }, children);
}
export default Component26838;
