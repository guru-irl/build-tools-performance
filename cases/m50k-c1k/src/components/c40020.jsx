import React from 'react';
const LABEL_40020 = 'component_40020';
export function Component40020({ value = 40020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40020, 'data-value': derived.doubled }, children);
}
export default Component40020;
