import React from 'react';
const LABEL_12940 = 'component_12940';
export function Component12940({ value = 12940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12940, 'data-value': derived.doubled }, children);
}
export default Component12940;
