import React from 'react';
const LABEL_11464 = 'component_11464';
export function Component11464({ value = 11464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11464, 'data-value': derived.doubled }, children);
}
export default Component11464;
