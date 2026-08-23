import React from 'react';
const LABEL_34613 = 'component_34613';
export function Component34613({ value = 34613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34613, 'data-value': derived.doubled }, children);
}
export default Component34613;
