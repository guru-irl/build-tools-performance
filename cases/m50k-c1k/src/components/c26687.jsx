import React from 'react';
const LABEL_26687 = 'component_26687';
export function Component26687({ value = 26687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26687, 'data-value': derived.doubled }, children);
}
export default Component26687;
