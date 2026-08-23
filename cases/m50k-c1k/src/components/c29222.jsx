import React from 'react';
const LABEL_29222 = 'component_29222';
export function Component29222({ value = 29222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29222, 'data-value': derived.doubled }, children);
}
export default Component29222;
