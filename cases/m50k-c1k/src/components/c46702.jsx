import React from 'react';
const LABEL_46702 = 'component_46702';
export function Component46702({ value = 46702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46702, 'data-value': derived.doubled }, children);
}
export default Component46702;
