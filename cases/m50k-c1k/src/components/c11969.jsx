import React from 'react';
const LABEL_11969 = 'component_11969';
export function Component11969({ value = 11969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11969, 'data-value': derived.doubled }, children);
}
export default Component11969;
