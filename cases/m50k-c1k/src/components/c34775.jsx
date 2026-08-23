import React from 'react';
const LABEL_34775 = 'component_34775';
export function Component34775({ value = 34775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34775, 'data-value': derived.doubled }, children);
}
export default Component34775;
