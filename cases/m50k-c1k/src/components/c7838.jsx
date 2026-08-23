import React from 'react';
const LABEL_7838 = 'component_7838';
export function Component7838({ value = 7838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7838, 'data-value': derived.doubled }, children);
}
export default Component7838;
