import React from 'react';
const LABEL_34873 = 'component_34873';
export function Component34873({ value = 34873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34873, 'data-value': derived.doubled }, children);
}
export default Component34873;
