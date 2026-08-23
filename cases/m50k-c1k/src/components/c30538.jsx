import React from 'react';
const LABEL_30538 = 'component_30538';
export function Component30538({ value = 30538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30538, 'data-value': derived.doubled }, children);
}
export default Component30538;
