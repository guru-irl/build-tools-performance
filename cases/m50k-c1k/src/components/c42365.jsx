import React from 'react';
const LABEL_42365 = 'component_42365';
export function Component42365({ value = 42365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42365, 'data-value': derived.doubled }, children);
}
export default Component42365;
