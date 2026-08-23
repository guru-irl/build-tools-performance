import React from 'react';
const LABEL_29567 = 'component_29567';
export function Component29567({ value = 29567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29567, 'data-value': derived.doubled }, children);
}
export default Component29567;
