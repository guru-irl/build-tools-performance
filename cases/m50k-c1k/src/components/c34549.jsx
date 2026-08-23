import React from 'react';
const LABEL_34549 = 'component_34549';
export function Component34549({ value = 34549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34549, 'data-value': derived.doubled }, children);
}
export default Component34549;
