import React from 'react';
const LABEL_34017 = 'component_34017';
export function Component34017({ value = 34017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34017, 'data-value': derived.doubled }, children);
}
export default Component34017;
