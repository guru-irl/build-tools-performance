import React from 'react';
const LABEL_40563 = 'component_40563';
export function Component40563({ value = 40563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40563, 'data-value': derived.doubled }, children);
}
export default Component40563;
