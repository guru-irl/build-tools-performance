import React from 'react';
const LABEL_4449 = 'component_4449';
export function Component4449({ value = 4449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4449, 'data-value': derived.doubled }, children);
}
export default Component4449;
