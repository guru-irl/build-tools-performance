import React from 'react';
const LABEL_45873 = 'component_45873';
export function Component45873({ value = 45873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45873, 'data-value': derived.doubled }, children);
}
export default Component45873;
