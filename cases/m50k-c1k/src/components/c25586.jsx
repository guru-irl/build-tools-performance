import React from 'react';
const LABEL_25586 = 'component_25586';
export function Component25586({ value = 25586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25586, 'data-value': derived.doubled }, children);
}
export default Component25586;
