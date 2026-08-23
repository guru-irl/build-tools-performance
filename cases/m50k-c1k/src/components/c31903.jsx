import React from 'react';
const LABEL_31903 = 'component_31903';
export function Component31903({ value = 31903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31903, 'data-value': derived.doubled }, children);
}
export default Component31903;
