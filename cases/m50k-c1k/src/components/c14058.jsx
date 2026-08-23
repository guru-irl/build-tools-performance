import React from 'react';
const LABEL_14058 = 'component_14058';
export function Component14058({ value = 14058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14058, 'data-value': derived.doubled }, children);
}
export default Component14058;
