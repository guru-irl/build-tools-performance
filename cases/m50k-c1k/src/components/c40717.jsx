import React from 'react';
const LABEL_40717 = 'component_40717';
export function Component40717({ value = 40717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40717, 'data-value': derived.doubled }, children);
}
export default Component40717;
