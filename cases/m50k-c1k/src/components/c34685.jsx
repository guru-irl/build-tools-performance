import React from 'react';
const LABEL_34685 = 'component_34685';
export function Component34685({ value = 34685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34685, 'data-value': derived.doubled }, children);
}
export default Component34685;
