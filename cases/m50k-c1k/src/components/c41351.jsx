import React from 'react';
const LABEL_41351 = 'component_41351';
export function Component41351({ value = 41351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41351, 'data-value': derived.doubled }, children);
}
export default Component41351;
