import React from 'react';
const LABEL_35282 = 'component_35282';
export function Component35282({ value = 35282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35282, 'data-value': derived.doubled }, children);
}
export default Component35282;
