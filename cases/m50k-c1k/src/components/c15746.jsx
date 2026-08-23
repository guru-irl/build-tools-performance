import React from 'react';
const LABEL_15746 = 'component_15746';
export function Component15746({ value = 15746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15746, 'data-value': derived.doubled }, children);
}
export default Component15746;
