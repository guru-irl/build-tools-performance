import React from 'react';
const LABEL_4755 = 'component_4755';
export function Component4755({ value = 4755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4755, 'data-value': derived.doubled }, children);
}
export default Component4755;
