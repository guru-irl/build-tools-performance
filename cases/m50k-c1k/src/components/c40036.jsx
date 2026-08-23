import React from 'react';
const LABEL_40036 = 'component_40036';
export function Component40036({ value = 40036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40036, 'data-value': derived.doubled }, children);
}
export default Component40036;
