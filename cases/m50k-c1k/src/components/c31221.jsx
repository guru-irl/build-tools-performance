import React from 'react';
const LABEL_31221 = 'component_31221';
export function Component31221({ value = 31221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31221, 'data-value': derived.doubled }, children);
}
export default Component31221;
