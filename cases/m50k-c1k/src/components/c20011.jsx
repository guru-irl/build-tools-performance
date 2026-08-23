import React from 'react';
const LABEL_20011 = 'component_20011';
export function Component20011({ value = 20011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20011, 'data-value': derived.doubled }, children);
}
export default Component20011;
