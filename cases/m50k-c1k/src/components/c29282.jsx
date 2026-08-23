import React from 'react';
const LABEL_29282 = 'component_29282';
export function Component29282({ value = 29282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29282, 'data-value': derived.doubled }, children);
}
export default Component29282;
