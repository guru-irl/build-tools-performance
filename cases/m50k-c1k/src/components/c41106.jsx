import React from 'react';
const LABEL_41106 = 'component_41106';
export function Component41106({ value = 41106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41106, 'data-value': derived.doubled }, children);
}
export default Component41106;
