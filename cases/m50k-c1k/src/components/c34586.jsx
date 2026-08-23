import React from 'react';
const LABEL_34586 = 'component_34586';
export function Component34586({ value = 34586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34586, 'data-value': derived.doubled }, children);
}
export default Component34586;
