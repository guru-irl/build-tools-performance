import React from 'react';
const LABEL_35387 = 'component_35387';
export function Component35387({ value = 35387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35387, 'data-value': derived.doubled }, children);
}
export default Component35387;
