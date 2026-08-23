import React from 'react';
const LABEL_34094 = 'component_34094';
export function Component34094({ value = 34094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34094, 'data-value': derived.doubled }, children);
}
export default Component34094;
