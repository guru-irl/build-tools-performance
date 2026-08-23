import React from 'react';
const LABEL_41504 = 'component_41504';
export function Component41504({ value = 41504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41504, 'data-value': derived.doubled }, children);
}
export default Component41504;
