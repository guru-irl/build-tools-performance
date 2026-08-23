import React from 'react';
const LABEL_38985 = 'component_38985';
export function Component38985({ value = 38985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38985, 'data-value': derived.doubled }, children);
}
export default Component38985;
