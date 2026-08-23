import React from 'react';
const LABEL_34640 = 'component_34640';
export function Component34640({ value = 34640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34640, 'data-value': derived.doubled }, children);
}
export default Component34640;
