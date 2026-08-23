import React from 'react';
const LABEL_11364 = 'component_11364';
export function Component11364({ value = 11364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11364, 'data-value': derived.doubled }, children);
}
export default Component11364;
