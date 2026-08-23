import React from 'react';
const LABEL_13728 = 'component_13728';
export function Component13728({ value = 13728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13728, 'data-value': derived.doubled }, children);
}
export default Component13728;
