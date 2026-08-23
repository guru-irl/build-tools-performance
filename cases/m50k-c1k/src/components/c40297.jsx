import React from 'react';
const LABEL_40297 = 'component_40297';
export function Component40297({ value = 40297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40297, 'data-value': derived.doubled }, children);
}
export default Component40297;
