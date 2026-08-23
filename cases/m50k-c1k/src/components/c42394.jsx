import React from 'react';
const LABEL_42394 = 'component_42394';
export function Component42394({ value = 42394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42394, 'data-value': derived.doubled }, children);
}
export default Component42394;
