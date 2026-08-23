import React from 'react';
const LABEL_14507 = 'component_14507';
export function Component14507({ value = 14507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14507, 'data-value': derived.doubled }, children);
}
export default Component14507;
