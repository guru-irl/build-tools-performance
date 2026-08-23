import React from 'react';
const LABEL_35564 = 'component_35564';
export function Component35564({ value = 35564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35564, 'data-value': derived.doubled }, children);
}
export default Component35564;
