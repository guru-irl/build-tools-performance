import React from 'react';
const LABEL_4954 = 'component_4954';
export function Component4954({ value = 4954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4954, 'data-value': derived.doubled }, children);
}
export default Component4954;
