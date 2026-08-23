import React from 'react';
const LABEL_8717 = 'component_8717';
export function Component8717({ value = 8717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8717, 'data-value': derived.doubled }, children);
}
export default Component8717;
