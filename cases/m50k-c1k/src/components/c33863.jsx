import React from 'react';
const LABEL_33863 = 'component_33863';
export function Component33863({ value = 33863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33863, 'data-value': derived.doubled }, children);
}
export default Component33863;
