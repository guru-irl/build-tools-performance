import React from 'react';
const LABEL_45735 = 'component_45735';
export function Component45735({ value = 45735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45735, 'data-value': derived.doubled }, children);
}
export default Component45735;
