import React from 'react';
const LABEL_36881 = 'component_36881';
export function Component36881({ value = 36881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36881, 'data-value': derived.doubled }, children);
}
export default Component36881;
