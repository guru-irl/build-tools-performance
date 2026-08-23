import React from 'react';
const LABEL_31067 = 'component_31067';
export function Component31067({ value = 31067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31067, 'data-value': derived.doubled }, children);
}
export default Component31067;
