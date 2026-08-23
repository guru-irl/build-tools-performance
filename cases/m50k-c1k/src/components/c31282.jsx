import React from 'react';
const LABEL_31282 = 'component_31282';
export function Component31282({ value = 31282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31282, 'data-value': derived.doubled }, children);
}
export default Component31282;
