import React from 'react';
const LABEL_30058 = 'component_30058';
export function Component30058({ value = 30058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30058, 'data-value': derived.doubled }, children);
}
export default Component30058;
