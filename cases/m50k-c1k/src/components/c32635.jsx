import React from 'react';
const LABEL_32635 = 'component_32635';
export function Component32635({ value = 32635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32635, 'data-value': derived.doubled }, children);
}
export default Component32635;
