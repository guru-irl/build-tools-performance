import React from 'react';
const LABEL_30656 = 'component_30656';
export function Component30656({ value = 30656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30656, 'data-value': derived.doubled }, children);
}
export default Component30656;
