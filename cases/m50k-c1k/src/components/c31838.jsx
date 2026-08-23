import React from 'react';
const LABEL_31838 = 'component_31838';
export function Component31838({ value = 31838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31838, 'data-value': derived.doubled }, children);
}
export default Component31838;
