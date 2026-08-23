import React from 'react';
const LABEL_11728 = 'component_11728';
export function Component11728({ value = 11728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11728, 'data-value': derived.doubled }, children);
}
export default Component11728;
