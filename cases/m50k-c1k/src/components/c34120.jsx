import React from 'react';
const LABEL_34120 = 'component_34120';
export function Component34120({ value = 34120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34120, 'data-value': derived.doubled }, children);
}
export default Component34120;
