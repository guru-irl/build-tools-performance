import React from 'react';
const LABEL_39755 = 'component_39755';
export function Component39755({ value = 39755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39755, 'data-value': derived.doubled }, children);
}
export default Component39755;
