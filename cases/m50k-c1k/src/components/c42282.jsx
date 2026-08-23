import React from 'react';
const LABEL_42282 = 'component_42282';
export function Component42282({ value = 42282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42282, 'data-value': derived.doubled }, children);
}
export default Component42282;
