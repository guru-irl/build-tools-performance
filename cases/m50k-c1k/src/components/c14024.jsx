import React from 'react';
const LABEL_14024 = 'component_14024';
export function Component14024({ value = 14024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14024, 'data-value': derived.doubled }, children);
}
export default Component14024;
