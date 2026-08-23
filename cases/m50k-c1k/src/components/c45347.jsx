import React from 'react';
const LABEL_45347 = 'component_45347';
export function Component45347({ value = 45347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45347, 'data-value': derived.doubled }, children);
}
export default Component45347;
