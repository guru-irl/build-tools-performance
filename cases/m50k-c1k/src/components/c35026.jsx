import React from 'react';
const LABEL_35026 = 'component_35026';
export function Component35026({ value = 35026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35026, 'data-value': derived.doubled }, children);
}
export default Component35026;
