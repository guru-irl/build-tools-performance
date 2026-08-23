import React from 'react';
const LABEL_13282 = 'component_13282';
export function Component13282({ value = 13282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13282, 'data-value': derived.doubled }, children);
}
export default Component13282;
