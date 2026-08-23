import React from 'react';
const LABEL_31365 = 'component_31365';
export function Component31365({ value = 31365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31365, 'data-value': derived.doubled }, children);
}
export default Component31365;
