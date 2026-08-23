import React from 'react';
const LABEL_34780 = 'component_34780';
export function Component34780({ value = 34780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34780, 'data-value': derived.doubled }, children);
}
export default Component34780;
