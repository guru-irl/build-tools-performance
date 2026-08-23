import React from 'react';
const LABEL_25120 = 'component_25120';
export function Component25120({ value = 25120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25120, 'data-value': derived.doubled }, children);
}
export default Component25120;
