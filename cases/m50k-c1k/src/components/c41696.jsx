import React from 'react';
const LABEL_41696 = 'component_41696';
export function Component41696({ value = 41696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41696, 'data-value': derived.doubled }, children);
}
export default Component41696;
