import React from 'react';
const LABEL_31023 = 'component_31023';
export function Component31023({ value = 31023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31023, 'data-value': derived.doubled }, children);
}
export default Component31023;
