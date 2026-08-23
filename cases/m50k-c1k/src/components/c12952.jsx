import React from 'react';
const LABEL_12952 = 'component_12952';
export function Component12952({ value = 12952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12952, 'data-value': derived.doubled }, children);
}
export default Component12952;
