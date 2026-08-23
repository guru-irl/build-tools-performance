import React from 'react';
const LABEL_41405 = 'component_41405';
export function Component41405({ value = 41405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41405, 'data-value': derived.doubled }, children);
}
export default Component41405;
