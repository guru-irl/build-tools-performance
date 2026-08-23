import React from 'react';
const LABEL_18282 = 'component_18282';
export function Component18282({ value = 18282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18282, 'data-value': derived.doubled }, children);
}
export default Component18282;
