import React from 'react';
const LABEL_30853 = 'component_30853';
export function Component30853({ value = 30853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30853, 'data-value': derived.doubled }, children);
}
export default Component30853;
