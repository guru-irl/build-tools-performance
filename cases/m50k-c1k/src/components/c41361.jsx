import React from 'react';
const LABEL_41361 = 'component_41361';
export function Component41361({ value = 41361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41361, 'data-value': derived.doubled }, children);
}
export default Component41361;
