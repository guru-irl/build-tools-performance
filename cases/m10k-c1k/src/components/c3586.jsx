import React from 'react';
const LABEL_3586 = 'component_3586';
export function Component3586({ value = 3586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3586, 'data-value': derived.doubled }, children);
}
export default Component3586;
