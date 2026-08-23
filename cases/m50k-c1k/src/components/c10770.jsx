import React from 'react';
const LABEL_10770 = 'component_10770';
export function Component10770({ value = 10770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10770, 'data-value': derived.doubled }, children);
}
export default Component10770;
