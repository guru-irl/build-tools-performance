import React from 'react';
const LABEL_19282 = 'component_19282';
export function Component19282({ value = 19282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19282, 'data-value': derived.doubled }, children);
}
export default Component19282;
