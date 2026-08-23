import React from 'react';
const LABEL_34706 = 'component_34706';
export function Component34706({ value = 34706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34706, 'data-value': derived.doubled }, children);
}
export default Component34706;
