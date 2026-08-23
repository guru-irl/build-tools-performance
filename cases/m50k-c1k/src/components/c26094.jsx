import React from 'react';
const LABEL_26094 = 'component_26094';
export function Component26094({ value = 26094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26094, 'data-value': derived.doubled }, children);
}
export default Component26094;
