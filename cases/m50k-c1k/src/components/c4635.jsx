import React from 'react';
const LABEL_4635 = 'component_4635';
export function Component4635({ value = 4635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4635, 'data-value': derived.doubled }, children);
}
export default Component4635;
