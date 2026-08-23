import React from 'react';
const LABEL_41244 = 'component_41244';
export function Component41244({ value = 41244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41244, 'data-value': derived.doubled }, children);
}
export default Component41244;
