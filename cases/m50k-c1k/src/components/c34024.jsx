import React from 'react';
const LABEL_34024 = 'component_34024';
export function Component34024({ value = 34024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34024, 'data-value': derived.doubled }, children);
}
export default Component34024;
