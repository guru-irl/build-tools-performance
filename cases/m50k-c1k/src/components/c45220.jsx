import React from 'react';
const LABEL_45220 = 'component_45220';
export function Component45220({ value = 45220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45220, 'data-value': derived.doubled }, children);
}
export default Component45220;
