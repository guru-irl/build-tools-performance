import React from 'react';
const LABEL_44026 = 'component_44026';
export function Component44026({ value = 44026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44026, 'data-value': derived.doubled }, children);
}
export default Component44026;
