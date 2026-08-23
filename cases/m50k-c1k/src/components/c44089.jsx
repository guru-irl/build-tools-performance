import React from 'react';
const LABEL_44089 = 'component_44089';
export function Component44089({ value = 44089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44089, 'data-value': derived.doubled }, children);
}
export default Component44089;
