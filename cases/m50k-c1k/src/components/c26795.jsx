import React from 'react';
const LABEL_26795 = 'component_26795';
export function Component26795({ value = 26795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26795, 'data-value': derived.doubled }, children);
}
export default Component26795;
