import React from 'react';
const LABEL_39983 = 'component_39983';
export function Component39983({ value = 39983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39983, 'data-value': derived.doubled }, children);
}
export default Component39983;
