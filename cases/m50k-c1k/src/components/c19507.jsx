import React from 'react';
const LABEL_19507 = 'component_19507';
export function Component19507({ value = 19507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19507, 'data-value': derived.doubled }, children);
}
export default Component19507;
