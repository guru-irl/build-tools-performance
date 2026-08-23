import React from 'react';
const LABEL_35820 = 'component_35820';
export function Component35820({ value = 35820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35820, 'data-value': derived.doubled }, children);
}
export default Component35820;
