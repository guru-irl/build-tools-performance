import React from 'react';
const LABEL_45768 = 'component_45768';
export function Component45768({ value = 45768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45768, 'data-value': derived.doubled }, children);
}
export default Component45768;
