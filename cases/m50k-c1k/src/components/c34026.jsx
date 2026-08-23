import React from 'react';
const LABEL_34026 = 'component_34026';
export function Component34026({ value = 34026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34026, 'data-value': derived.doubled }, children);
}
export default Component34026;
