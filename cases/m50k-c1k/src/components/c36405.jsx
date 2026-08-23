import React from 'react';
const LABEL_36405 = 'component_36405';
export function Component36405({ value = 36405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36405, 'data-value': derived.doubled }, children);
}
export default Component36405;
