import React from 'react';
const LABEL_46136 = 'component_46136';
export function Component46136({ value = 46136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46136, 'data-value': derived.doubled }, children);
}
export default Component46136;
