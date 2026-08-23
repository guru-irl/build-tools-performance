import React from 'react';
const LABEL_26735 = 'component_26735';
export function Component26735({ value = 26735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26735, 'data-value': derived.doubled }, children);
}
export default Component26735;
