import React from 'react';
const LABEL_40998 = 'component_40998';
export function Component40998({ value = 40998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40998, 'data-value': derived.doubled }, children);
}
export default Component40998;
