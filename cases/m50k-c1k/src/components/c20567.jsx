import React from 'react';
const LABEL_20567 = 'component_20567';
export function Component20567({ value = 20567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20567, 'data-value': derived.doubled }, children);
}
export default Component20567;
