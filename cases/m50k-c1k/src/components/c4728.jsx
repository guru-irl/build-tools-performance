import React from 'react';
const LABEL_4728 = 'component_4728';
export function Component4728({ value = 4728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4728, 'data-value': derived.doubled }, children);
}
export default Component4728;
