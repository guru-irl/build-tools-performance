import React from 'react';
const LABEL_31394 = 'component_31394';
export function Component31394({ value = 31394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31394, 'data-value': derived.doubled }, children);
}
export default Component31394;
