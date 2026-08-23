import React from 'react';
const LABEL_40914 = 'component_40914';
export function Component40914({ value = 40914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40914, 'data-value': derived.doubled }, children);
}
export default Component40914;
