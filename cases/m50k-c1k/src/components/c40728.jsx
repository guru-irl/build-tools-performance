import React from 'react';
const LABEL_40728 = 'component_40728';
export function Component40728({ value = 40728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40728, 'data-value': derived.doubled }, children);
}
export default Component40728;
