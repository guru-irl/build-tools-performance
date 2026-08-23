import React from 'react';
const LABEL_31670 = 'component_31670';
export function Component31670({ value = 31670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31670, 'data-value': derived.doubled }, children);
}
export default Component31670;
