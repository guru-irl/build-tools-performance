import React from 'react';
const LABEL_32687 = 'component_32687';
export function Component32687({ value = 32687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32687, 'data-value': derived.doubled }, children);
}
export default Component32687;
