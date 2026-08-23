import React from 'react';
const LABEL_35586 = 'component_35586';
export function Component35586({ value = 35586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35586, 'data-value': derived.doubled }, children);
}
export default Component35586;
