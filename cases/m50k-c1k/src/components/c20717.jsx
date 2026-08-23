import React from 'react';
const LABEL_20717 = 'component_20717';
export function Component20717({ value = 20717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20717, 'data-value': derived.doubled }, children);
}
export default Component20717;
