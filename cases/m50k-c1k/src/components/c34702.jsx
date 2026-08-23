import React from 'react';
const LABEL_34702 = 'component_34702';
export function Component34702({ value = 34702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34702, 'data-value': derived.doubled }, children);
}
export default Component34702;
