import React from 'react';
const LABEL_31687 = 'component_31687';
export function Component31687({ value = 31687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31687, 'data-value': derived.doubled }, children);
}
export default Component31687;
