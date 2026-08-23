import React from 'react';
const LABEL_19640 = 'component_19640';
export function Component19640({ value = 19640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19640, 'data-value': derived.doubled }, children);
}
export default Component19640;
