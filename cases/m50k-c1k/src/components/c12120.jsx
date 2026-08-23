import React from 'react';
const LABEL_12120 = 'component_12120';
export function Component12120({ value = 12120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12120, 'data-value': derived.doubled }, children);
}
export default Component12120;
