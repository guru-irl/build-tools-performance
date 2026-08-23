import React from 'react';
const LABEL_39507 = 'component_39507';
export function Component39507({ value = 39507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39507, 'data-value': derived.doubled }, children);
}
export default Component39507;
