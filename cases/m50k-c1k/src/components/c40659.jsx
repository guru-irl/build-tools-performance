import React from 'react';
const LABEL_40659 = 'component_40659';
export function Component40659({ value = 40659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40659, 'data-value': derived.doubled }, children);
}
export default Component40659;
