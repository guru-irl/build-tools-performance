import React from 'react';
const LABEL_37566 = 'component_37566';
export function Component37566({ value = 37566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37566, 'data-value': derived.doubled }, children);
}
export default Component37566;
