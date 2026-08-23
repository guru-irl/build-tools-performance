import React from 'react';
const LABEL_41610 = 'component_41610';
export function Component41610({ value = 41610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41610, 'data-value': derived.doubled }, children);
}
export default Component41610;
