import React from 'react';
const LABEL_19405 = 'component_19405';
export function Component19405({ value = 19405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19405, 'data-value': derived.doubled }, children);
}
export default Component19405;
