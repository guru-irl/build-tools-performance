import React from 'react';
const LABEL_567 = 'component_567';
export function Component567({ value = 567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_567, 'data-value': derived.doubled }, children);
}
export default Component567;
