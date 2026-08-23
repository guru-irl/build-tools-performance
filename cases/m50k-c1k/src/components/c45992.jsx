import React from 'react';
const LABEL_45992 = 'component_45992';
export function Component45992({ value = 45992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45992, 'data-value': derived.doubled }, children);
}
export default Component45992;
