import React from 'react';
const LABEL_35728 = 'component_35728';
export function Component35728({ value = 35728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35728, 'data-value': derived.doubled }, children);
}
export default Component35728;
