import React from 'react';
const LABEL_45090 = 'component_45090';
export function Component45090({ value = 45090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45090, 'data-value': derived.doubled }, children);
}
export default Component45090;
