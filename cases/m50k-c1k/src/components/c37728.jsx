import React from 'react';
const LABEL_37728 = 'component_37728';
export function Component37728({ value = 37728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37728, 'data-value': derived.doubled }, children);
}
export default Component37728;
