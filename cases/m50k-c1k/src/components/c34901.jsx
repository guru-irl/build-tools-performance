import React from 'react';
const LABEL_34901 = 'component_34901';
export function Component34901({ value = 34901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34901, 'data-value': derived.doubled }, children);
}
export default Component34901;
