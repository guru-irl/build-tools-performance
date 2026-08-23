import React from 'react';
const LABEL_41282 = 'component_41282';
export function Component41282({ value = 41282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41282, 'data-value': derived.doubled }, children);
}
export default Component41282;
