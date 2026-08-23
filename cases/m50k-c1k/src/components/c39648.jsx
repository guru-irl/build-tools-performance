import React from 'react';
const LABEL_39648 = 'component_39648';
export function Component39648({ value = 39648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39648, 'data-value': derived.doubled }, children);
}
export default Component39648;
