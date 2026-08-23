import React from 'react';
const LABEL_45958 = 'component_45958';
export function Component45958({ value = 45958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45958, 'data-value': derived.doubled }, children);
}
export default Component45958;
