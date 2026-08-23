import React from 'react';
const LABEL_46254 = 'component_46254';
export function Component46254({ value = 46254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46254, 'data-value': derived.doubled }, children);
}
export default Component46254;
