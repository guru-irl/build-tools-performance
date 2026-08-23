import React from 'react';
const LABEL_15807 = 'component_15807';
export function Component15807({ value = 15807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15807, 'data-value': derived.doubled }, children);
}
export default Component15807;
