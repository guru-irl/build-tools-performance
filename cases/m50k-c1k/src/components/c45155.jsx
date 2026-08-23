import React from 'react';
const LABEL_45155 = 'component_45155';
export function Component45155({ value = 45155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45155, 'data-value': derived.doubled }, children);
}
export default Component45155;
