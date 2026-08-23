import React from 'react';
const LABEL_8635 = 'component_8635';
export function Component8635({ value = 8635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8635, 'data-value': derived.doubled }, children);
}
export default Component8635;
