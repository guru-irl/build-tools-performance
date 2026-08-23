import React from 'react';
const LABEL_26494 = 'component_26494';
export function Component26494({ value = 26494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26494, 'data-value': derived.doubled }, children);
}
export default Component26494;
