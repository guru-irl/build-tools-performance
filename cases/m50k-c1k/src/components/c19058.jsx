import React from 'react';
const LABEL_19058 = 'component_19058';
export function Component19058({ value = 19058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19058, 'data-value': derived.doubled }, children);
}
export default Component19058;
