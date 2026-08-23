import React from 'react';
const LABEL_41245 = 'component_41245';
export function Component41245({ value = 41245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41245, 'data-value': derived.doubled }, children);
}
export default Component41245;
