import React from 'react';
const LABEL_19635 = 'component_19635';
export function Component19635({ value = 19635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19635, 'data-value': derived.doubled }, children);
}
export default Component19635;
