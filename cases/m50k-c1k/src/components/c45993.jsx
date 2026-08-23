import React from 'react';
const LABEL_45993 = 'component_45993';
export function Component45993({ value = 45993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45993, 'data-value': derived.doubled }, children);
}
export default Component45993;
