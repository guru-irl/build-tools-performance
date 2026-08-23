import React from 'react';
const LABEL_10834 = 'component_10834';
export function Component10834({ value = 10834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10834, 'data-value': derived.doubled }, children);
}
export default Component10834;
