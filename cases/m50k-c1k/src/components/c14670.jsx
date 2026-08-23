import React from 'react';
const LABEL_14670 = 'component_14670';
export function Component14670({ value = 14670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14670, 'data-value': derived.doubled }, children);
}
export default Component14670;
