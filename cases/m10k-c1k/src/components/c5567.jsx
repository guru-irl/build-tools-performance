import React from 'react';
const LABEL_5567 = 'component_5567';
export function Component5567({ value = 5567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5567, 'data-value': derived.doubled }, children);
}
export default Component5567;
