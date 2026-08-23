import React from 'react';
const LABEL_4950 = 'component_4950';
export function Component4950({ value = 4950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4950, 'data-value': derived.doubled }, children);
}
export default Component4950;
