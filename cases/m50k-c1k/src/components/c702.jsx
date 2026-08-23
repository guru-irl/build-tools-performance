import React from 'react';
const LABEL_702 = 'component_702';
export function Component702({ value = 702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_702, 'data-value': derived.doubled }, children);
}
export default Component702;
