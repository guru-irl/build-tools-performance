import React from 'react';
const LABEL_11144 = 'component_11144';
export function Component11144({ value = 11144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11144, 'data-value': derived.doubled }, children);
}
export default Component11144;
