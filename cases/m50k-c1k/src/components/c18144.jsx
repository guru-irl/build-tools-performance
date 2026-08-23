import React from 'react';
const LABEL_18144 = 'component_18144';
export function Component18144({ value = 18144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18144, 'data-value': derived.doubled }, children);
}
export default Component18144;
