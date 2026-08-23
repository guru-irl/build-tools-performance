import React from 'react';
const LABEL_39282 = 'component_39282';
export function Component39282({ value = 39282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39282, 'data-value': derived.doubled }, children);
}
export default Component39282;
